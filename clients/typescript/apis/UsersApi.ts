// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { InlineResponse2008 } from '../models/InlineResponse2008';
import { InlineResponse2009 } from '../models/InlineResponse2009';

/**
 * no description
 */
export class UsersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Login User
     * Login User
     * @param xApiKey 
     * @param xMerchantId 
     * @param xDeviceId 
     * @param xSessionID 
     * @param authorization 
     * @param type 
     * @param loadProfileData 
     */
    public async usersLoginDeviceFingerprintPost(xApiKey?: string, xMerchantId?: string, xDeviceId?: string, xSessionID?: string, authorization?: string, type?: string, loadProfileData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/users/login/device-fingerprint';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
        }

        // Query Params
        if (loadProfileData !== undefined) {
            requestContext.setQueryParam("load_profile_data", ObjectSerializer.serialize(loadProfileData, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-Api-Key", ObjectSerializer.serialize(xApiKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Merchant-Id", ObjectSerializer.serialize(xMerchantId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Device-Id", ObjectSerializer.serialize(xDeviceId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Session-ID", ObjectSerializer.serialize(xSessionID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-Api-Key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get User Information
     * Get User Information
     * @param xApiKey 
     * @param xMerchantId 
     * @param xDeviceId 
     * @param authorization 
     */
    public async usersMeGet(xApiKey?: string, xMerchantId?: string, xDeviceId?: string, authorization?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/users/me';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Api-Key", ObjectSerializer.serialize(xApiKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Merchant-Id", ObjectSerializer.serialize(xMerchantId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Device-Id", ObjectSerializer.serialize(xDeviceId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-Api-Key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class UsersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersLoginDeviceFingerprintPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersLoginDeviceFingerprintPost(response: ResponseContext): Promise<InlineResponse2008 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2008 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2008", ""
            ) as InlineResponse2008;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2008 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2008", ""
            ) as InlineResponse2008;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to usersMeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async usersMeGet(response: ResponseContext): Promise<InlineResponse2009 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2009 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2009", ""
            ) as InlineResponse2009;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2009 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2009", ""
            ) as InlineResponse2009;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
