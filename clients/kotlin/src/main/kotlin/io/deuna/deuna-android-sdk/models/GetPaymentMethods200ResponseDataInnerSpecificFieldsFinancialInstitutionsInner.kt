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

package io.deuna.deuna-android-sdk.models


import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param description Descripción de la institución financiera.
 * @param id Identificador de la institución financiera.
 */


data class GetPaymentMethods200ResponseDataInnerSpecificFieldsFinancialInstitutionsInner (

    /* Descripción de la institución financiera. */
    @Json(name = "Description")
    var description: kotlin.String? = null,

    /* Identificador de la institución financiera. */
    @Json(name = "Id")
    var id: kotlin.String? = null

)

