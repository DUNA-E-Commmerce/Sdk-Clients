//
// OrderTokenRequestOrderItemsInnerTotalAmount.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** El precio total del producto es: la cantidad del producto multiplicado por el precio unitario más los impuestos */
public struct OrderTokenRequestOrderItemsInnerTotalAmount: Codable, JSONEncodable, Hashable {

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
    public enum CurrencySymbol: String, Codable, CaseIterable {
        case dollar = "$"
        case sSlashPeriod = "S/."
        case rDollar = "R$"
    }
    static let currencyRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    static let currencySymbolRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    /** El precio total de los productos. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. */
    public var amount: Double?
    /** Representa la moneda de uso del comercio en 3 caracteres bajo la ISO 3166-1 alpha-3 */
    public var currency: Currency?
    /** Simbolo de la moneda de tu comercio */
    public var currencySymbol: CurrencySymbol?
    /** El precio original de los productos, esto representa el precio sin ningun descuento. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. */
    public var originalAmount: Double?
    /** El total de los descuentos aplicados sobre los items */
    public var totalDiscount: Double?

    public init(amount: Double? = nil, currency: Currency? = nil, currencySymbol: CurrencySymbol? = nil, originalAmount: Double? = nil, totalDiscount: Double? = nil) {
        self.amount = amount
        self.currency = currency
        self.currencySymbol = currencySymbol
        self.originalAmount = originalAmount
        self.totalDiscount = totalDiscount
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case amount
        case currency
        case currencySymbol = "currency_symbol"
        case originalAmount = "original_amount"
        case totalDiscount = "total_discount"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(amount, forKey: .amount)
        try container.encodeIfPresent(currency, forKey: .currency)
        try container.encodeIfPresent(currencySymbol, forKey: .currencySymbol)
        try container.encodeIfPresent(originalAmount, forKey: .originalAmount)
        try container.encodeIfPresent(totalDiscount, forKey: .totalDiscount)
    }
}

