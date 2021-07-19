export const updateAppTitle = (title) => {
    return {type: "UPDATE_PAGE_TITLE", payload: title}
}
export const updateAppDescripton = (desc) => {
    return {type: "UPDATE_PAGE_TITLE", payload: desc}
}
export const updateAppDetails = ({title,description,...rest}) => {
    return {type: "UPDATE_APP_DETAILS", payload:{pageTitle: title, description, ...rest}};
}