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

package org.openapitools.client.models


import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param additionalDescription 
 * @param address1 
 * @param address2 
 * @param addressType 
 * @param city 
 * @param countryCode 
 * @param createdAt 
 * @param firstName 
 * @param id 
 * @param identityDocument 
 * @param isDefault 
 * @param lastName 
 * @param lat 
 * @param lng 
 * @param phone 
 * @param stateName 
 * @param updatedAt 
 * @param userId 
 * @param zipcode 
 */


data class MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingAddress (

    @Json(name = "additional_description")
    var additionalDescription: kotlin.String? = null,

    @Json(name = "address1")
    var address1: kotlin.String? = null,

    @Json(name = "address2")
    var address2: kotlin.String? = null,

    @Json(name = "address_type")
    var addressType: kotlin.String? = null,

    @Json(name = "city")
    var city: kotlin.String? = null,

    @Json(name = "country_code")
    var countryCode: kotlin.String? = null,

    @Json(name = "created_at")
    var createdAt: kotlin.String? = null,

    @Json(name = "first_name")
    var firstName: kotlin.String? = null,

    @Json(name = "id")
    var id: java.math.BigDecimal? = null,

    @Json(name = "identity_document")
    var identityDocument: kotlin.String? = null,

    @Json(name = "is_default")
    var isDefault: kotlin.Boolean? = null,

    @Json(name = "last_name")
    var lastName: kotlin.String? = null,

    @Json(name = "lat")
    var lat: java.math.BigDecimal? = null,

    @Json(name = "lng")
    var lng: java.math.BigDecimal? = null,

    @Json(name = "phone")
    var phone: kotlin.String? = null,

    @Json(name = "state_name")
    var stateName: kotlin.String? = null,

    @Json(name = "updated_at")
    var updatedAt: kotlin.String? = null,

    @Json(name = "user_id")
    var userId: kotlin.String? = null,

    @Json(name = "zipcode")
    var zipcode: kotlin.String? = null

)

