
# OrderTokenRequestOrderBillingAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additionalDescription** | **kotlin.String** | Referencia del cliente | 
**address1** | **kotlin.String** | Dirección del cliente | 
**address2** | **kotlin.String** | Dirección del cliente | 
**addressType** | [**inline**](#AddressType) | Tipo de dirección del cliente | 
**city** | **kotlin.String** | Ciudad del cliente | 
**country** | [**inline**](#Country) | Código del país del cliente en 3 caracteres basado en el código ISO 3166-1 alpha-3 | 
**createdAt** | **kotlin.String** | Fecha de creación | 
**firstName** | **kotlin.String** | Nombre del cliente | 
**id** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Identificador de la dirección | 
**isDefault** | **kotlin.Boolean** | Si la dirección es la que se usara siempre | 
**lastName** | **kotlin.String** | Apellido del cliente | 
**lat** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Latitud de la dirección | 
**lng** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | Longitud de la dirección | 
**phone** | **kotlin.String** | Teléfono del cliente | 
**stateName** | **kotlin.String** | Estado de la dirección del cliente | 
**userId** | **kotlin.String** | Identificador del cliente | 
**zipcode** | **kotlin.String** | Código postal del cliente | 
**identityDocument** | **kotlin.String** | Número de identificación del cliente |  [optional]
**updatedAt** | **kotlin.String** | Fecha de modificación |  [optional]


<a id="AddressType"></a>
## Enum: address_type
Name | Value
---- | -----
addressType | home, office, other


<a id="Country"></a>
## Enum: country
Name | Value
---- | -----
country | ECU, BRA, PER, COL, CHL, MEX, ARG



