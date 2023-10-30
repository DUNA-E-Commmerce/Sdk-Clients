//
// OrderToken200ResponseOrderPaymentDataAmount.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** Monto del pago de la orden  */
public struct OrderToken200ResponseOrderPaymentDataAmount: Codable, JSONEncodable, Hashable {

    public enum Currency: String, Codable, CaseIterable {
        case usd = "USD"
        case mxn = "MXN"
        case cop = "COP"
        case clp = "CLP"
        case brl = "BRL"
        case ars = "ARS"
        case pen = "PEN"
        case empty = ""
    }
    /** Monto total de la orden. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. */
    public var amount: Int?
    /** Representaaa la moneda de uso del comercio en 3 caracteres bajo la ISO 3166-1 alpha-3  */
    public var currency: Currency?

    public init(amount: Int? = nil, currency: Currency? = nil) {
        self.amount = amount
        self.currency = currency
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case amount
        case currency
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(amount, forKey: .amount)
        try container.encodeIfPresent(currency, forKey: .currency)
    }
}

