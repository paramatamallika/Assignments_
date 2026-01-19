const requestCounts = {};
const LIMIT = 15;
const TIME_WINDOW = 60 * 1000; // 1 minute

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!requestCounts[ip]) {
    requestCounts[ip] = { count: 1, startTime: currentTime };
    return next();
  }

  const elapsedTime = currentTime - requestCounts[ip].startTime;

  if (elapsedTime > TIME_WINDOW) {
    requestCounts[ip] = { count: 1, startTime: currentTime };
    return next();
  }

  if (requestCounts[ip].count >= LIMIT) {
    return res.status(429).json({
      error: "Too many requests, please try again later"
    });
  }

  requestCounts[ip].count++;
  next();
};

module.exports = rateLimiter;
