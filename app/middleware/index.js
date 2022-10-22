export const start_time = (req, res, next) => {
    req.start_time = new Date().getTime()
    console.log(req.start_time)
    next()
}

export const end_time = (req, res, next) => {
    const duration = (new Date().getTime() - req.start_time) / 1000
    res.set('x-process-time', duration)
    res.json(req.process_response)
    next()
}

export const filter = (req, res, next) => {
    next()
}