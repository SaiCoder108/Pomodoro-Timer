function resolveToken(req) {
    const headerToken = (req.headers["x-todoist-token"] || "").toString().trim();
    if (headerToken) {
        return headerToken.replace(/^Bearer\s+/i, "");
    }

    const envToken = (process.env.TODOIST_API_TOKEN || "").toString().trim();
    return envToken.replace(/^Bearer\s+/i, "");
}

function parseBody(req) {
    if (!req.body) return {};
    if (typeof req.body === "string") {
        try {
            return JSON.parse(req.body);
        } catch {
            return {};
        }
    }
    return req.body;
}

module.exports = async (req, res) => {
    if (req.method !== "POST") {
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

    const body = parseBody(req);
    const taskId = body.taskId;

    if (!taskId) {
        res.status(400).json({ error: "Missing taskId in request body." });
        return;
    }

    try {
        const todoistRes = await fetch(`https://api.todoist.com/rest/v2/tasks/${taskId}/close`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!todoistRes.ok) {
            const text = await todoistRes.text();
            let parsed = null;
            try {
                parsed = text ? JSON.parse(text) : null;
            } catch {
                parsed = null;
            }

            res.status(todoistRes.status).json({
                error:
                    parsed && parsed.error
                        ? `Todoist: ${parsed.error}`
                        : `Todoist close failed (${todoistRes.status}).`,
            });
            return;
        }

        res.status(200).json({ ok: true });
    } catch (err) {
        res.status(500).json({ error: err.message || "Server error while closing task." });
    }
};
