function resolveToken(req) {
    const headerToken = (req.headers["x-todoist-token"] || "").toString().trim();
    if (headerToken) {
        return headerToken.replace(/^Bearer\s+/i, "");
    }

    const envToken = (process.env.TODOIST_API_TOKEN || "").toString().trim();
    return envToken.replace(/^Bearer\s+/i, "");
}

module.exports = async (req, res) => {
    if (req.method !== "GET") {
        res.status(405).json({ error: "Method not allowed." });
        return;
    }

    const token = resolveToken(req);
    if (!token) {
        res.status(400).json({
            error: "Missing Todoist token. Set TODOIST_API_TOKEN in Vercel env or pass x-todoist-token.",
        });
        return;
    }

    try {
        const todoistRes = await fetch("https://api.todoist.com/rest/v2/tasks", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const text = await todoistRes.text();
        let data = [];
        if (text) {
            try {
                data = JSON.parse(text);
            } catch {
                data = null;
            }
        }

        if (!todoistRes.ok) {
            res.status(todoistRes.status).json({
                error:
                    data && data.error
                        ? `Todoist: ${data.error}`
                        : `Todoist request failed (${todoistRes.status}).`,
            });
            return;
        }

        res.status(200).json(Array.isArray(data) ? data : []);
    } catch (err) {
        res.status(500).json({ error: err.message || "Server error while loading tasks." });
    }
};
