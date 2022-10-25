import instance from "./intance";
 

export const listNews = () => {
    const url = `get-all-by-publish`
    return instance.get(url,{
        params  : {
            'type' : 1
        }
    }  )
}

