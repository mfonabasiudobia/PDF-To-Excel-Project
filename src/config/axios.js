import axios from "axios";

const axiosBase = axios.create({
    baseURL:"https://api.pdf.co/v1/pdf/convert/to/xls",
    headers: {
        'x-api-key': 'mfonabasiisaac@gmail.com_5ba9e888f96819bdb79a19513116c72d98a8c8d84e08b5e0245a96c392ba0047b5012445',
    }
});

export default axiosBase;