import { custom_response, success_response } from "../core/model_response.js"

export const get_homepage = (req, res, next) => {
    req.process_response = success_response({ data: "get homepage successfully" })
    next()
}

export const update_homepage = (req, res, next) => {
    req.process_response = custom_response({ data: "update homepage successfully", status_code: "201", message: "success" })
    next()
}