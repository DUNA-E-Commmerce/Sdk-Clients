/**
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 *
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package io.deuna.apigw-kotlin-sdk.apis

import java.io.IOException
import okhttp3.OkHttpClient
import okhttp3.HttpUrl

import io.deuna.apigw-kotlin-sdk.models.GetUserInformation200Response
import io.deuna.apigw-kotlin-sdk.models.Login200Response
import io.deuna.apigw-kotlin-sdk.models.Login403Response
import io.deuna.apigw-kotlin-sdk.models.LoginRequest
import io.deuna.apigw-kotlin-sdk.models.UsersLoginDeviceFingerprintPost200Response
import io.deuna.apigw-kotlin-sdk.models.UsersUserIdCardsCardIdGet200Response
import io.deuna.apigw-kotlin-sdk.models.UsersUserIdCardsGet200Response

import com.squareup.moshi.Json

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import io.deuna.apigw-kotlin-sdk.infrastructure.ApiClient
import io.deuna.apigw-kotlin-sdk.infrastructure.ApiResponse
import io.deuna.apigw-kotlin-sdk.infrastructure.ClientException
import io.deuna.apigw-kotlin-sdk.infrastructure.ClientError
import io.deuna.apigw-kotlin-sdk.infrastructure.ServerException
import io.deuna.apigw-kotlin-sdk.infrastructure.ServerError
import io.deuna.apigw-kotlin-sdk.infrastructure.MultiValueMap
import io.deuna.apigw-kotlin-sdk.infrastructure.PartConfig
import io.deuna.apigw-kotlin-sdk.infrastructure.RequestConfig
import io.deuna.apigw-kotlin-sdk.infrastructure.RequestMethod
import io.deuna.apigw-kotlin-sdk.infrastructure.ResponseType
import io.deuna.apigw-kotlin-sdk.infrastructure.Success
import io.deuna.apigw-kotlin-sdk.infrastructure.toMultiValue

class UsersApi(basePath: kotlin.String = defaultBasePath, client: OkHttpClient = ApiClient.defaultClient) : ApiClient(basePath, client) {
    companion object {
        @JvmStatic
        val defaultBasePath: String by lazy {
            System.getProperties().getProperty(ApiClient.baseUrlKey, "https://staging-apigw.getduna.com:443")
        }
    }

    /**
     * Remove card by identifier
     * Remove card by identifier
     * @param userId 
     * @param cardId 
     * @param authorization  (optional)
     * @return void
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     * @throws UnsupportedOperationException If the API returns an informational or redirection response
     * @throws ClientException If the API returns a client error response
     * @throws ServerException If the API returns a server error response
     */
    @Throws(IllegalStateException::class, IOException::class, UnsupportedOperationException::class, ClientException::class, ServerException::class)
    suspend fun deleteUserCardById(userId: kotlin.String, cardId: kotlin.String, authorization: kotlin.String? = null) : Unit = withContext(Dispatchers.IO) {
        val localVarResponse = deleteUserCardByIdWithHttpInfo(userId = userId, cardId = cardId, authorization = authorization)

        return@withContext when (localVarResponse.responseType) {
            ResponseType.Success -> Unit
            ResponseType.Informational -> throw UnsupportedOperationException("Client does not support Informational responses.")
            ResponseType.Redirection -> throw UnsupportedOperationException("Client does not support Redirection responses.")
            ResponseType.ClientError -> {
                val localVarError = localVarResponse as ClientError<*>
                throw ClientException("Client error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
            ResponseType.ServerError -> {
                val localVarError = localVarResponse as ServerError<*>
                throw ServerException("Server error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
        }
    }

    /**
     * Remove card by identifier
     * Remove card by identifier
     * @param userId 
     * @param cardId 
     * @param authorization  (optional)
     * @return ApiResponse<Unit?>
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     */
    @Throws(IllegalStateException::class, IOException::class)
    suspend fun deleteUserCardByIdWithHttpInfo(userId: kotlin.String?, cardId: kotlin.String?, authorization: kotlin.String?) : ApiResponse<Unit?> = withContext(Dispatchers.IO) {
        val localVariableConfig = deleteUserCardByIdRequestConfig(userId = userId, cardId = cardId, authorization = authorization)

        return@withContext request<Unit, Unit>(
            localVariableConfig
        )
    }

    /**
     * To obtain the request config of the operation deleteUserCardById
     *
     * @param userId 
     * @param cardId 
     * @param authorization  (optional)
     * @return RequestConfig
     */
    fun deleteUserCardByIdRequestConfig(userId: kotlin.String?, cardId: kotlin.String?, authorization: kotlin.String?) : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()
        authorization?.apply { localVariableHeaders["Authorization"] = this.toString() }
        localVariableHeaders["Accept"] = "application/json"

        return RequestConfig(
            method = RequestMethod.DELETE,
            path = "/users/{user_id}/cards/{card_id}".replace("{"+"user_id"+"}", encodeURIComponent(userId.toString())).replace("{"+"card_id"+"}", encodeURIComponent(cardId.toString())),
            query = localVariableQuery,
            headers = localVariableHeaders,
            requiresAuthentication = true,
            body = localVariableBody
        )
    }

    /**
     * Get User Information
     * Get User Information
     * @param xApiKey  (optional)
     * @param xMerchantId  (optional)
     * @param xDeviceId  (optional)
     * @param authorization  (optional)
     * @return GetUserInformation200Response
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     * @throws UnsupportedOperationException If the API returns an informational or redirection response
     * @throws ClientException If the API returns a client error response
     * @throws ServerException If the API returns a server error response
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class, UnsupportedOperationException::class, ClientException::class, ServerException::class)
    suspend fun getUserInformation(xApiKey: kotlin.String? = null, xMerchantId: kotlin.String? = null, xDeviceId: kotlin.String? = null, authorization: kotlin.String? = null) : GetUserInformation200Response = withContext(Dispatchers.IO) {
        val localVarResponse = getUserInformationWithHttpInfo(xApiKey = xApiKey, xMerchantId = xMerchantId, xDeviceId = xDeviceId, authorization = authorization)

        return@withContext when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as GetUserInformation200Response
            ResponseType.Informational -> throw UnsupportedOperationException("Client does not support Informational responses.")
            ResponseType.Redirection -> throw UnsupportedOperationException("Client does not support Redirection responses.")
            ResponseType.ClientError -> {
                val localVarError = localVarResponse as ClientError<*>
                throw ClientException("Client error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
            ResponseType.ServerError -> {
                val localVarError = localVarResponse as ServerError<*>
                throw ServerException("Server error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
        }
    }

    /**
     * Get User Information
     * Get User Information
     * @param xApiKey  (optional)
     * @param xMerchantId  (optional)
     * @param xDeviceId  (optional)
     * @param authorization  (optional)
     * @return ApiResponse<GetUserInformation200Response?>
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class)
    suspend fun getUserInformationWithHttpInfo(xApiKey: kotlin.String?, xMerchantId: kotlin.String?, xDeviceId: kotlin.String?, authorization: kotlin.String?) : ApiResponse<GetUserInformation200Response?> = withContext(Dispatchers.IO) {
        val localVariableConfig = getUserInformationRequestConfig(xApiKey = xApiKey, xMerchantId = xMerchantId, xDeviceId = xDeviceId, authorization = authorization)

        return@withContext request<Unit, GetUserInformation200Response>(
            localVariableConfig
        )
    }

    /**
     * To obtain the request config of the operation getUserInformation
     *
     * @param xApiKey  (optional)
     * @param xMerchantId  (optional)
     * @param xDeviceId  (optional)
     * @param authorization  (optional)
     * @return RequestConfig
     */
    fun getUserInformationRequestConfig(xApiKey: kotlin.String?, xMerchantId: kotlin.String?, xDeviceId: kotlin.String?, authorization: kotlin.String?) : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()
        xApiKey?.apply { localVariableHeaders["X-Api-Key"] = this.toString() }
        xMerchantId?.apply { localVariableHeaders["X-Merchant-Id"] = this.toString() }
        xDeviceId?.apply { localVariableHeaders["X-Device-Id"] = this.toString() }
        authorization?.apply { localVariableHeaders["Authorization"] = this.toString() }
        localVariableHeaders["Accept"] = "application/json"

        return RequestConfig(
            method = RequestMethod.GET,
            path = "/users/me",
            query = localVariableQuery,
            headers = localVariableHeaders,
            requiresAuthentication = true,
            body = localVariableBody
        )
    }

    /**
     * Allows logging in with the OTP code sent to the user&#39;s email or phone. This must be specified in the query param.
     * Allows logging in with the OTP code sent to the user&#39;s email or phone. This must be specified in the query param.
     * @param xApiKey  (optional)
     * @param xMerchantId  (optional)
     * @param xDeviceId  (optional)
     * @param xSessionID  (optional)
     * @param authorization  (optional)
     * @param xRecaptchaToken  (optional)
     * @param type  (optional)
     * @param loadProfileData  (optional)
     * @param loginRequest  (optional)
     * @return Login200Response
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     * @throws UnsupportedOperationException If the API returns an informational or redirection response
     * @throws ClientException If the API returns a client error response
     * @throws ServerException If the API returns a server error response
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class, UnsupportedOperationException::class, ClientException::class, ServerException::class)
    suspend fun login(xApiKey: kotlin.String? = null, xMerchantId: kotlin.String? = null, xDeviceId: kotlin.String? = null, xSessionID: kotlin.String? = null, authorization: kotlin.String? = null, xRecaptchaToken: kotlin.String? = null, type: kotlin.String? = null, loadProfileData: kotlin.String? = null, loginRequest: LoginRequest? = null) : Login200Response = withContext(Dispatchers.IO) {
        val localVarResponse = loginWithHttpInfo(xApiKey = xApiKey, xMerchantId = xMerchantId, xDeviceId = xDeviceId, xSessionID = xSessionID, authorization = authorization, xRecaptchaToken = xRecaptchaToken, type = type, loadProfileData = loadProfileData, loginRequest = loginRequest)

        return@withContext when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as Login200Response
            ResponseType.Informational -> throw UnsupportedOperationException("Client does not support Informational responses.")
            ResponseType.Redirection -> throw UnsupportedOperationException("Client does not support Redirection responses.")
            ResponseType.ClientError -> {
                val localVarError = localVarResponse as ClientError<*>
                throw ClientException("Client error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
            ResponseType.ServerError -> {
                val localVarError = localVarResponse as ServerError<*>
                throw ServerException("Server error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
        }
    }

    /**
     * Allows logging in with the OTP code sent to the user&#39;s email or phone. This must be specified in the query param.
     * Allows logging in with the OTP code sent to the user&#39;s email or phone. This must be specified in the query param.
     * @param xApiKey  (optional)
     * @param xMerchantId  (optional)
     * @param xDeviceId  (optional)
     * @param xSessionID  (optional)
     * @param authorization  (optional)
     * @param xRecaptchaToken  (optional)
     * @param type  (optional)
     * @param loadProfileData  (optional)
     * @param loginRequest  (optional)
     * @return ApiResponse<Login200Response?>
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class)
    suspend fun loginWithHttpInfo(xApiKey: kotlin.String?, xMerchantId: kotlin.String?, xDeviceId: kotlin.String?, xSessionID: kotlin.String?, authorization: kotlin.String?, xRecaptchaToken: kotlin.String?, type: kotlin.String?, loadProfileData: kotlin.String?, loginRequest: LoginRequest?) : ApiResponse<Login200Response?> = withContext(Dispatchers.IO) {
        val localVariableConfig = loginRequestConfig(xApiKey = xApiKey, xMerchantId = xMerchantId, xDeviceId = xDeviceId, xSessionID = xSessionID, authorization = authorization, xRecaptchaToken = xRecaptchaToken, type = type, loadProfileData = loadProfileData, loginRequest = loginRequest)

        return@withContext request<LoginRequest, Login200Response>(
            localVariableConfig
        )
    }

    /**
     * To obtain the request config of the operation login
     *
     * @param xApiKey  (optional)
     * @param xMerchantId  (optional)
     * @param xDeviceId  (optional)
     * @param xSessionID  (optional)
     * @param authorization  (optional)
     * @param xRecaptchaToken  (optional)
     * @param type  (optional)
     * @param loadProfileData  (optional)
     * @param loginRequest  (optional)
     * @return RequestConfig
     */
    fun loginRequestConfig(xApiKey: kotlin.String?, xMerchantId: kotlin.String?, xDeviceId: kotlin.String?, xSessionID: kotlin.String?, authorization: kotlin.String?, xRecaptchaToken: kotlin.String?, type: kotlin.String?, loadProfileData: kotlin.String?, loginRequest: LoginRequest?) : RequestConfig<LoginRequest> {
        val localVariableBody = loginRequest
        val localVariableQuery: MultiValueMap = mutableMapOf<kotlin.String, kotlin.collections.List<kotlin.String>>()
            .apply {
                if (type != null) {
                    put("type", listOf(type.toString()))
                }
                if (loadProfileData != null) {
                    put("load_profile_data", listOf(loadProfileData.toString()))
                }
            }
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()
        xApiKey?.apply { localVariableHeaders["X-Api-Key"] = this.toString() }
        xMerchantId?.apply { localVariableHeaders["X-Merchant-Id"] = this.toString() }
        xDeviceId?.apply { localVariableHeaders["X-Device-Id"] = this.toString() }
        xSessionID?.apply { localVariableHeaders["X-Session-ID"] = this.toString() }
        authorization?.apply { localVariableHeaders["Authorization"] = this.toString() }
        xRecaptchaToken?.apply { localVariableHeaders["X-Recaptcha-Token"] = this.toString() }
        localVariableHeaders["Content-Type"] = "application/json"
        localVariableHeaders["Accept"] = "application/json"

        return RequestConfig(
            method = RequestMethod.POST,
            path = "/users/login",
            query = localVariableQuery,
            headers = localVariableHeaders,
            requiresAuthentication = true,
            body = localVariableBody
        )
    }

    /**
     * Login User
     * Login User
     * @param xApiKey  (optional)
     * @param xMerchantId  (optional)
     * @param xDeviceId  (optional)
     * @param xSessionID  (optional)
     * @param authorization  (optional)
     * @param type  (optional)
     * @param loadProfileData  (optional)
     * @return UsersLoginDeviceFingerprintPost200Response
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     * @throws UnsupportedOperationException If the API returns an informational or redirection response
     * @throws ClientException If the API returns a client error response
     * @throws ServerException If the API returns a server error response
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class, UnsupportedOperationException::class, ClientException::class, ServerException::class)
    suspend fun usersLoginDeviceFingerprintPost(xApiKey: kotlin.String? = null, xMerchantId: kotlin.String? = null, xDeviceId: kotlin.String? = null, xSessionID: kotlin.String? = null, authorization: kotlin.String? = null, type: kotlin.String? = null, loadProfileData: kotlin.String? = null) : UsersLoginDeviceFingerprintPost200Response = withContext(Dispatchers.IO) {
        val localVarResponse = usersLoginDeviceFingerprintPostWithHttpInfo(xApiKey = xApiKey, xMerchantId = xMerchantId, xDeviceId = xDeviceId, xSessionID = xSessionID, authorization = authorization, type = type, loadProfileData = loadProfileData)

        return@withContext when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as UsersLoginDeviceFingerprintPost200Response
            ResponseType.Informational -> throw UnsupportedOperationException("Client does not support Informational responses.")
            ResponseType.Redirection -> throw UnsupportedOperationException("Client does not support Redirection responses.")
            ResponseType.ClientError -> {
                val localVarError = localVarResponse as ClientError<*>
                throw ClientException("Client error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
            ResponseType.ServerError -> {
                val localVarError = localVarResponse as ServerError<*>
                throw ServerException("Server error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
        }
    }

    /**
     * Login User
     * Login User
     * @param xApiKey  (optional)
     * @param xMerchantId  (optional)
     * @param xDeviceId  (optional)
     * @param xSessionID  (optional)
     * @param authorization  (optional)
     * @param type  (optional)
     * @param loadProfileData  (optional)
     * @return ApiResponse<UsersLoginDeviceFingerprintPost200Response?>
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class)
    suspend fun usersLoginDeviceFingerprintPostWithHttpInfo(xApiKey: kotlin.String?, xMerchantId: kotlin.String?, xDeviceId: kotlin.String?, xSessionID: kotlin.String?, authorization: kotlin.String?, type: kotlin.String?, loadProfileData: kotlin.String?) : ApiResponse<UsersLoginDeviceFingerprintPost200Response?> = withContext(Dispatchers.IO) {
        val localVariableConfig = usersLoginDeviceFingerprintPostRequestConfig(xApiKey = xApiKey, xMerchantId = xMerchantId, xDeviceId = xDeviceId, xSessionID = xSessionID, authorization = authorization, type = type, loadProfileData = loadProfileData)

        return@withContext request<Unit, UsersLoginDeviceFingerprintPost200Response>(
            localVariableConfig
        )
    }

    /**
     * To obtain the request config of the operation usersLoginDeviceFingerprintPost
     *
     * @param xApiKey  (optional)
     * @param xMerchantId  (optional)
     * @param xDeviceId  (optional)
     * @param xSessionID  (optional)
     * @param authorization  (optional)
     * @param type  (optional)
     * @param loadProfileData  (optional)
     * @return RequestConfig
     */
    fun usersLoginDeviceFingerprintPostRequestConfig(xApiKey: kotlin.String?, xMerchantId: kotlin.String?, xDeviceId: kotlin.String?, xSessionID: kotlin.String?, authorization: kotlin.String?, type: kotlin.String?, loadProfileData: kotlin.String?) : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf<kotlin.String, kotlin.collections.List<kotlin.String>>()
            .apply {
                if (type != null) {
                    put("type", listOf(type.toString()))
                }
                if (loadProfileData != null) {
                    put("load_profile_data", listOf(loadProfileData.toString()))
                }
            }
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()
        xApiKey?.apply { localVariableHeaders["X-Api-Key"] = this.toString() }
        xMerchantId?.apply { localVariableHeaders["X-Merchant-Id"] = this.toString() }
        xDeviceId?.apply { localVariableHeaders["X-Device-Id"] = this.toString() }
        xSessionID?.apply { localVariableHeaders["X-Session-ID"] = this.toString() }
        authorization?.apply { localVariableHeaders["Authorization"] = this.toString() }
        localVariableHeaders["Accept"] = "application/json"

        return RequestConfig(
            method = RequestMethod.POST,
            path = "/users/login/device-fingerprint",
            query = localVariableQuery,
            headers = localVariableHeaders,
            requiresAuthentication = true,
            body = localVariableBody
        )
    }

    /**
     * Obtain a card by its identifier.
     * Obtain a card by its identifier.
     * @param userId 
     * @param cardId 
     * @param authorization  (optional)
     * @return UsersUserIdCardsCardIdGet200Response
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     * @throws UnsupportedOperationException If the API returns an informational or redirection response
     * @throws ClientException If the API returns a client error response
     * @throws ServerException If the API returns a server error response
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class, UnsupportedOperationException::class, ClientException::class, ServerException::class)
    suspend fun usersUserIdCardsCardIdGet(userId: kotlin.String, cardId: kotlin.String, authorization: kotlin.String? = null) : UsersUserIdCardsCardIdGet200Response = withContext(Dispatchers.IO) {
        val localVarResponse = usersUserIdCardsCardIdGetWithHttpInfo(userId = userId, cardId = cardId, authorization = authorization)

        return@withContext when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as UsersUserIdCardsCardIdGet200Response
            ResponseType.Informational -> throw UnsupportedOperationException("Client does not support Informational responses.")
            ResponseType.Redirection -> throw UnsupportedOperationException("Client does not support Redirection responses.")
            ResponseType.ClientError -> {
                val localVarError = localVarResponse as ClientError<*>
                throw ClientException("Client error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
            ResponseType.ServerError -> {
                val localVarError = localVarResponse as ServerError<*>
                throw ServerException("Server error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
        }
    }

    /**
     * Obtain a card by its identifier.
     * Obtain a card by its identifier.
     * @param userId 
     * @param cardId 
     * @param authorization  (optional)
     * @return ApiResponse<UsersUserIdCardsCardIdGet200Response?>
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class)
    suspend fun usersUserIdCardsCardIdGetWithHttpInfo(userId: kotlin.String?, cardId: kotlin.String?, authorization: kotlin.String?) : ApiResponse<UsersUserIdCardsCardIdGet200Response?> = withContext(Dispatchers.IO) {
        val localVariableConfig = usersUserIdCardsCardIdGetRequestConfig(userId = userId, cardId = cardId, authorization = authorization)

        return@withContext request<Unit, UsersUserIdCardsCardIdGet200Response>(
            localVariableConfig
        )
    }

    /**
     * To obtain the request config of the operation usersUserIdCardsCardIdGet
     *
     * @param userId 
     * @param cardId 
     * @param authorization  (optional)
     * @return RequestConfig
     */
    fun usersUserIdCardsCardIdGetRequestConfig(userId: kotlin.String?, cardId: kotlin.String?, authorization: kotlin.String?) : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()
        authorization?.apply { localVariableHeaders["Authorization"] = this.toString() }
        localVariableHeaders["Accept"] = "application/json"

        return RequestConfig(
            method = RequestMethod.GET,
            path = "/users/{user_id}/cards/{card_id}".replace("{"+"user_id"+"}", encodeURIComponent(userId.toString())).replace("{"+"card_id"+"}", encodeURIComponent(cardId.toString())),
            query = localVariableQuery,
            headers = localVariableHeaders,
            requiresAuthentication = true,
            body = localVariableBody
        )
    }

    /**
     * Get all user cards
     * Get all user cards
     * @param userId 
     * @param authorization  (optional)
     * @param xMerchantID  (optional)
     * @return UsersUserIdCardsGet200Response
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     * @throws UnsupportedOperationException If the API returns an informational or redirection response
     * @throws ClientException If the API returns a client error response
     * @throws ServerException If the API returns a server error response
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class, UnsupportedOperationException::class, ClientException::class, ServerException::class)
    suspend fun usersUserIdCardsGet(userId: kotlin.String, authorization: kotlin.String? = null, xMerchantID: kotlin.String? = null) : UsersUserIdCardsGet200Response = withContext(Dispatchers.IO) {
        val localVarResponse = usersUserIdCardsGetWithHttpInfo(userId = userId, authorization = authorization, xMerchantID = xMerchantID)

        return@withContext when (localVarResponse.responseType) {
            ResponseType.Success -> (localVarResponse as Success<*>).data as UsersUserIdCardsGet200Response
            ResponseType.Informational -> throw UnsupportedOperationException("Client does not support Informational responses.")
            ResponseType.Redirection -> throw UnsupportedOperationException("Client does not support Redirection responses.")
            ResponseType.ClientError -> {
                val localVarError = localVarResponse as ClientError<*>
                throw ClientException("Client error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
            ResponseType.ServerError -> {
                val localVarError = localVarResponse as ServerError<*>
                throw ServerException("Server error : ${localVarError.statusCode} ${localVarError.message.orEmpty()}", localVarError.statusCode, localVarResponse)
            }
        }
    }

    /**
     * Get all user cards
     * Get all user cards
     * @param userId 
     * @param authorization  (optional)
     * @param xMerchantID  (optional)
     * @return ApiResponse<UsersUserIdCardsGet200Response?>
     * @throws IllegalStateException If the request is not correctly configured
     * @throws IOException Rethrows the OkHttp execute method exception
     */
    @Suppress("UNCHECKED_CAST")
    @Throws(IllegalStateException::class, IOException::class)
    suspend fun usersUserIdCardsGetWithHttpInfo(userId: kotlin.String?, authorization: kotlin.String?, xMerchantID: kotlin.String?) : ApiResponse<UsersUserIdCardsGet200Response?> = withContext(Dispatchers.IO) {
        val localVariableConfig = usersUserIdCardsGetRequestConfig(userId = userId, authorization = authorization, xMerchantID = xMerchantID)

        return@withContext request<Unit, UsersUserIdCardsGet200Response>(
            localVariableConfig
        )
    }

    /**
     * To obtain the request config of the operation usersUserIdCardsGet
     *
     * @param userId 
     * @param authorization  (optional)
     * @param xMerchantID  (optional)
     * @return RequestConfig
     */
    fun usersUserIdCardsGetRequestConfig(userId: kotlin.String?, authorization: kotlin.String?, xMerchantID: kotlin.String?) : RequestConfig<Unit> {
        val localVariableBody = null
        val localVariableQuery: MultiValueMap = mutableMapOf()
        val localVariableHeaders: MutableMap<String, String> = mutableMapOf()
        authorization?.apply { localVariableHeaders["Authorization"] = this.toString() }
        xMerchantID?.apply { localVariableHeaders["X-Merchant-ID"] = this.toString() }
        localVariableHeaders["Accept"] = "application/json"

        return RequestConfig(
            method = RequestMethod.GET,
            path = "/users/{user_id}/cards".replace("{"+"user_id"+"}", encodeURIComponent(userId.toString())),
            query = localVariableQuery,
            headers = localVariableHeaders,
            requiresAuthentication = true,
            body = localVariableBody
        )
    }


    private fun encodeURIComponent(uriComponent: kotlin.String): kotlin.String =
        HttpUrl.Builder().scheme("http").host("localhost").addPathSegment(uriComponent).build().encodedPathSegments[0]
}