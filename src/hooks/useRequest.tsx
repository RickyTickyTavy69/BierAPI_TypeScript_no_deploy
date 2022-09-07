

const useRequest = () => {

    const request = async (url: string) : Promise<object> => {
        const response = await fetch(url);
        return response;
    }

    return request;

}

export default useRequest;
