## Ejemplo de integración


## Instalación

``` npm install apigw-sdk ```

## Integración Ejemplo
```import express from 'express';
import {Login200Response, MerchantsApi} from "apigw-sdk";
const app = express();
const port = 3000;

const merchantApi = new MerchantsApi();

const login = async (username: string, password: string) => {
    const {data, error} = await merchantApi.login({
        loginRequest: {
            email: username,
            password: password
        }
    });
    return data

}
const createMerchant = async () => {
    const {data, error} = await merchantApi.createMerchant({
        createMerchantRequest: {
            country: "HU",
            city: "Budapest",
            name: "Example Merchant",
            short_name: "Example",
            timezone: "Europe/Budapest",
            currency: "HUF",
            managed_by_duna: true,
        }
    });
    return data;
}


app.get('/', async (req, res) => {
    const responseLogin = await login("", "");
    const responseCreateMerchant = await createMerchant();
    res.json(responseCreateMerchant);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
```