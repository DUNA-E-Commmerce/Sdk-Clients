//
// PurchaseRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct PurchaseRequest: Codable, JSONEncodable, Hashable {

    public enum MethodType: String, Codable, CaseIterable {
        case cash = "cash"
        case pos = "pos"
        case creditCard = "credit_card"
    }
    public enum ProcessorName: String, Codable, CaseIterable {
        case cash = "cash"
        case pos = "pos"
        case kushki = "kushki"
        case conektaCredit = "conekta_credit"
        case paymentezCredit = "paymentez_credit"
    }
    public var billingAddress: PurchaseRequestBillingAddress?
    /** URL de redirección */
    public var callbackUrl: String?
    /** Identificador de la tarjeta si se encuentra tokenizada, si este valor existe solo debe enviar el cvv de la tarjeta en el objeto *credit_card* */
    public var cardId: String?
    /** Token de la orden a procesar */
    public var cashChange: String?
    public var creditCard: PurchaseRequestCreditCard?
    /** Device id for mercadopago fraud credential generated by the cross domain login snippet. */
    public var deviceId: String?
    /** Email del usuario */
    public var email: String
    /** Metodo de pago puede ser tarjeta de crédito, POS o terminal y efectivo */
    public var methodType: MethodType
    /** Es el link de pago generado al tokenizar la orden para efectuar el pago */
    public var paymentLink: String?
    /** Nombre del procesador de pago de tarjeta de credito, en caso sea efectivo se debe colocar *cash*, en caso sea POS o terminal se debe colocar *pos* */
    public var processorName: ProcessorName?
    /** Se utiliza para la creación del usuario */
    public var saveUserInfo: Bool?
    /** Session id for the current */
    public var sessionId: String?
    public var shippingAddress: PurchaseRequestShippingAddress?
    public var specificFields: PurchaseRequestSpecificFields?
    /** Código de la tienda, si solo cuentas con una tienda o sucursal se debe usar \"all\" */
    public var storeCode: String
    /** Token de la orden a procesar */
    public var token: String
    /** Instrucciones del usuario */
    public var userInstructions: String?

    public init(billingAddress: PurchaseRequestBillingAddress? = nil, callbackUrl: String? = nil, cardId: String? = nil, cashChange: String? = nil, creditCard: PurchaseRequestCreditCard? = nil, deviceId: String? = nil, email: String, methodType: MethodType, paymentLink: String? = nil, processorName: ProcessorName? = nil, saveUserInfo: Bool? = nil, sessionId: String? = nil, shippingAddress: PurchaseRequestShippingAddress? = nil, specificFields: PurchaseRequestSpecificFields? = nil, storeCode: String, token: String, userInstructions: String? = nil) {
        self.billingAddress = billingAddress
        self.callbackUrl = callbackUrl
        self.cardId = cardId
        self.cashChange = cashChange
        self.creditCard = creditCard
        self.deviceId = deviceId
        self.email = email
        self.methodType = methodType
        self.paymentLink = paymentLink
        self.processorName = processorName
        self.saveUserInfo = saveUserInfo
        self.sessionId = sessionId
        self.shippingAddress = shippingAddress
        self.specificFields = specificFields
        self.storeCode = storeCode
        self.token = token
        self.userInstructions = userInstructions
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case billingAddress = "billing_address"
        case callbackUrl = "callback_url"
        case cardId = "card_id"
        case cashChange = "cash_change"
        case creditCard = "credit_card"
        case deviceId = "device_id"
        case email
        case methodType = "method_type"
        case paymentLink = "payment_link"
        case processorName = "processor_name"
        case saveUserInfo = "save_user_info"
        case sessionId = "session_id"
        case shippingAddress = "shipping_address"
        case specificFields = "specific_fields"
        case storeCode = "store_code"
        case token
        case userInstructions = "user_instructions"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(billingAddress, forKey: .billingAddress)
        try container.encodeIfPresent(callbackUrl, forKey: .callbackUrl)
        try container.encodeIfPresent(cardId, forKey: .cardId)
        try container.encodeIfPresent(cashChange, forKey: .cashChange)
        try container.encodeIfPresent(creditCard, forKey: .creditCard)
        try container.encodeIfPresent(deviceId, forKey: .deviceId)
        try container.encode(email, forKey: .email)
        try container.encode(methodType, forKey: .methodType)
        try container.encodeIfPresent(paymentLink, forKey: .paymentLink)
        try container.encodeIfPresent(processorName, forKey: .processorName)
        try container.encodeIfPresent(saveUserInfo, forKey: .saveUserInfo)
        try container.encodeIfPresent(sessionId, forKey: .sessionId)
        try container.encodeIfPresent(shippingAddress, forKey: .shippingAddress)
        try container.encodeIfPresent(specificFields, forKey: .specificFields)
        try container.encode(storeCode, forKey: .storeCode)
        try container.encode(token, forKey: .token)
        try container.encodeIfPresent(userInstructions, forKey: .userInstructions)
    }
}

