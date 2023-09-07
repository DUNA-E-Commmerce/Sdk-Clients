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

import io.deuna.deuna-android-sdk.models.OrderToken200ResponseOrderItemsInnerTaxAmount
import io.deuna.deuna-android-sdk.models.OrderToken200ResponseOrderItemsInnerTotalAmount
import io.deuna.deuna-android-sdk.models.OrderToken200ResponseOrderItemsInnerUnitPrice
import io.deuna.deuna-android-sdk.models.OrderToken200ResponseOrderItemsInnerWeight

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * Detalle del producto 
 *
 * @param brand Marca del producto
 * @param category Categoría del producto
 * @param color Color del producto
 * @param description Descripción del producto
 * @param detailsUrl URL del descuento en la página
 * @param discounts son los descuentos aplicados al producto
 * @param id Identificador del producto del comercio
 * @param imageUrl URL donde se encuentra alojada la imagen de tu producto 
 * @param isbn Sistema internacional de numeración de libros (International Standard Book Number)
 * @param manufacturer Fabricante del producto
 * @param name Nombre del producto
 * @param options 
 * @param quantity Es la cantidad del producto que comprara el usuario
 * @param propertySize Tamaño del producto
 * @param sku Número de referencia único (Stock Keeping Unit)
 * @param taxAmount 
 * @param taxable Si es que el producto aplica algún impuesto
 * @param totalAmount 
 * @param type Tipo de producto
 * @param unitPrice 
 * @param uom Unidad de medida (Unit of Measure)
 * @param upc Código universal del producto (Universal Product Code)
 * @param weight 
 */


data class Purchase200ResponseOrderItemsInner (

    /* Marca del producto */
    @Json(name = "brand")
    var brand: kotlin.String? = null,

    /* Categoría del producto */
    @Json(name = "category")
    var category: kotlin.String? = null,

    /* Color del producto */
    @Json(name = "color")
    var color: kotlin.String? = null,

    /* Descripción del producto */
    @Json(name = "description")
    var description: kotlin.String? = null,

    /* URL del descuento en la página */
    @Json(name = "details_url")
    var detailsUrl: kotlin.String? = null,

    /* son los descuentos aplicados al producto */
    @Json(name = "discounts")
    var discounts: kotlin.collections.MutableList<kotlin.Any>? = null,

    /* Identificador del producto del comercio */
    @Json(name = "id")
    var id: kotlin.String? = null,

    /* URL donde se encuentra alojada la imagen de tu producto  */
    @Json(name = "image_url")
    var imageUrl: kotlin.String? = null,

    /* Sistema internacional de numeración de libros (International Standard Book Number) */
    @Json(name = "isbn")
    var isbn: kotlin.String? = null,

    /* Fabricante del producto */
    @Json(name = "manufacturer")
    var manufacturer: kotlin.String? = null,

    /* Nombre del producto */
    @Json(name = "name")
    var name: kotlin.String? = null,

    @Json(name = "options")
    var options: kotlin.String? = null,

    /* Es la cantidad del producto que comprara el usuario */
    @Json(name = "quantity")
    var quantity: java.math.BigDecimal? = null,

    /* Tamaño del producto */
    @Json(name = "size")
    var propertySize: kotlin.String? = null,

    /* Número de referencia único (Stock Keeping Unit) */
    @Json(name = "sku")
    var sku: kotlin.String? = null,

    @Json(name = "tax_amount")
    var taxAmount: OrderToken200ResponseOrderItemsInnerTaxAmount? = null,

    /* Si es que el producto aplica algún impuesto */
    @Json(name = "taxable")
    var taxable: kotlin.Boolean? = false,

    @Json(name = "total_amount")
    var totalAmount: OrderToken200ResponseOrderItemsInnerTotalAmount? = null,

    /* Tipo de producto */
    @Json(name = "type")
    var type: kotlin.String? = null,

    @Json(name = "unit_price")
    var unitPrice: OrderToken200ResponseOrderItemsInnerUnitPrice? = null,

    /* Unidad de medida (Unit of Measure) */
    @Json(name = "uom")
    var uom: kotlin.String? = null,

    /* Código universal del producto (Universal Product Code) */
    @Json(name = "upc")
    var upc: kotlin.String? = null,

    @Json(name = "weight")
    var weight: OrderToken200ResponseOrderItemsInnerWeight? = null

)

