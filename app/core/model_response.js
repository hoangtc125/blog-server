export const success_response = ({ data = undefined }) => {
  return {
    status_code: "200",
    message: "success",
    data,
  };
};

export const custom_response = ({
  data = undefined,
  status_code = "200",
  message = "success",
}) => {
  return {
    status_code,
    message,
    data,
  };
};
