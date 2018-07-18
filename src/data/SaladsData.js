import axios from 'axios'

class SaladsData {
    getSalads(getUrl) {
        return new Promise((resolve, reject) => {
            axios.get(getUrl).then(respone => {
                if(respone.status===200){
                    resolve(respone.data);
                }
                else{
                    reject();
                }
            })
        });
    }
}

export default SaladsData;