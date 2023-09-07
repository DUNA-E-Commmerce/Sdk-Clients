
# PostUsersUserIdCards201ResponseData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardHolder** | **kotlin.String** | Nombre del tarjetahabiente |  [optional]
**cardHolderDni** | **kotlin.String** | Número de identificación del tarjetahabiente |  [optional]
**company** | **kotlin.String** | Compañia que emite la tarjeta |  [optional]
**createdAt** | **kotlin.String** | Fecha en que fue creada la tarjeta  (UTC) |  [optional]
**deletedAt** | **kotlin.String** | En caso de que el usuario elimine una tarjeta, se le da de baja con la fecha y se destruye el token de la tarjeta esta se manteniene para fines financieron y legales |  [optional]
**expirationDate** | **kotlin.String** | Fecha de expiración |  [optional]
**firstSix** | **kotlin.String** | Primero 6 dígitos de la tarjeta |  [optional]
**id** | **kotlin.String** | Identificador único de la tarjeta |  [optional]
**lastFour** | **kotlin.String** | Últimos 4 dígitos de la tarjeta |  [optional]
**updatedAt** | **kotlin.String** | Fecha de modificacion de la tarjeta  (UTC) |  [optional]
**userId** | **kotlin.String** | Identificador del usuario |  [optional]
**verifiedAt** | **kotlin.String** | Fecha de verificación de la tarjeta (UTC) |  [optional]
**verifiedBy** | **kotlin.String** | Describe el flujo por el cual verificó la tarjeta este puede ser por card_verifier,payment, empty string tarjeta no verificada |  [optional]
**verifiedWithTransactionId** | **kotlin.String** | Identificador de la transacción que verificó la tarjeta |  [optional]



