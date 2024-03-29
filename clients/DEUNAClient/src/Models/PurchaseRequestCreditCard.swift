//
// PurchaseRequestCreditCard.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Objeto de tarjeta de credito, si el método de pago es cash o POS se debe enviar vacio */
public struct PurchaseRequestCreditCard: Codable, JSONEncodable, Hashable {

    /** Dirección del tarjetahabiente */
    public var address1: String?
    /** Código de seguridad de la tarjeta */
    public var cardCvv: String?
    /** Franquicia de la tarjeta VISA || MASTERCARD || DINERS  */
    public var cardHolder: String?
    /** Documento de identidad del tarjetahabiente */
    public var cardHolderDni: String?
    /** Número de la tarjeta  */
    public var cardNumber: String?
    /** Ciudad de la dirección del tarjetahabiente */
    public var city: String?
    /** País del tarjetahabiente */
    public var country: String?
    /** Mes de expiración de la tarjeta */
    public var expiryMonth: String?
    /** Año de expiración de la tarjeta */
    public var expiryYear: String?
    /** Cantidad de cuotas */
    public var installments: Int?
    /** Número de teléfono del tarjetahabiente */
    public var phone: String?
    /** Estado de la dirección del tarjetahabiente */
    public var state: String?
    /** Código postal de la dirección del tarjetahabiente */
    public var zip: String?

    public init(address1: String? = nil, cardCvv: String? = nil, cardHolder: String? = nil, cardHolderDni: String? = nil, cardNumber: String? = nil, city: String? = nil, country: String? = nil, expiryMonth: String? = nil, expiryYear: String? = nil, installments: Int? = nil, phone: String? = nil, state: String? = nil, zip: String? = nil) {
        self.address1 = address1
        self.cardCvv = cardCvv
        self.cardHolder = cardHolder
        self.cardHolderDni = cardHolderDni
        self.cardNumber = cardNumber
        self.city = city
        self.country = country
        self.expiryMonth = expiryMonth
        self.expiryYear = expiryYear
        self.installments = installments
        self.phone = phone
        self.state = state
        self.zip = zip
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case address1
        case cardCvv = "card_cvv"
        case cardHolder = "card_holder"
        case cardHolderDni = "card_holder_dni"
        case cardNumber = "card_number"
        case city
        case country
        case expiryMonth = "expiry_month"
        case expiryYear = "expiry_year"
        case installments
        case phone
        case state
        case zip
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(address1, forKey: .address1)
        try container.encodeIfPresent(cardCvv, forKey: .cardCvv)
        try container.encodeIfPresent(cardHolder, forKey: .cardHolder)
        try container.encodeIfPresent(cardHolderDni, forKey: .cardHolderDni)
        try container.encodeIfPresent(cardNumber, forKey: .cardNumber)
        try container.encodeIfPresent(city, forKey: .city)
        try container.encodeIfPresent(country, forKey: .country)
        try container.encodeIfPresent(expiryMonth, forKey: .expiryMonth)
        try container.encodeIfPresent(expiryYear, forKey: .expiryYear)
        try container.encodeIfPresent(installments, forKey: .installments)
        try container.encodeIfPresent(phone, forKey: .phone)
        try container.encodeIfPresent(state, forKey: .state)
        try container.encodeIfPresent(zip, forKey: .zip)
    }
}

