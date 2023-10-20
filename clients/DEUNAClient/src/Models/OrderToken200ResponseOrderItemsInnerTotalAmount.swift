//
// OrderToken200ResponseOrderItemsInnerTotalAmount.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

/** El precio total del producto es: la cantidad del producto multiplicado por el precio unitario más los impuestos */
public struct OrderToken200ResponseOrderItemsInnerTotalAmount: Codable, JSONEncodable, Hashable {

    /** El precio total de los productos. */
    public var amount: Double?
    /** Representa la moneda de uso del comercio en 3 caracteres bajo la ISO 3166-1 alpha-3 */
    public var currency: String?
    /** Simbolo de la moneda de tu comercio */
    public var currencySymbol: String?
    /** El precio total de los productos que se mostrara en el checkout. */
    public var displayAmount: String?
    /** El precio original de los productos, esto representa el precio sin ningun descuento que se mostrara en el checkout. */
    public var displayOriginalAmount: String?
    /** Es el descuento total del producto que se mostrara en el checkout. */
    public var displayTotalDiscount: String?
    /** El precio original de los productos, esto representa el precio sin ningun descuento. */
    public var originalAmount: Double?
    /** Es el descuento total del producto. */
    public var totalDiscount: Double?

    public init(amount: Double? = nil, currency: String? = nil, currencySymbol: String? = nil, displayAmount: String? = nil, displayOriginalAmount: String? = nil, displayTotalDiscount: String? = nil, originalAmount: Double? = nil, totalDiscount: Double? = nil) {
        self.amount = amount
        self.currency = currency
        self.currencySymbol = currencySymbol
        self.displayAmount = displayAmount
        self.displayOriginalAmount = displayOriginalAmount
        self.displayTotalDiscount = displayTotalDiscount
        self.originalAmount = originalAmount
        self.totalDiscount = totalDiscount
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case amount
        case currency
        case currencySymbol = "currency_symbol"
        case displayAmount = "display_amount"
        case displayOriginalAmount = "display_original_amount"
        case displayTotalDiscount = "display_total_discount"
        case originalAmount = "original_amount"
        case totalDiscount = "total_discount"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(amount, forKey: .amount)
        try container.encodeIfPresent(currency, forKey: .currency)
        try container.encodeIfPresent(currencySymbol, forKey: .currencySymbol)
        try container.encodeIfPresent(displayAmount, forKey: .displayAmount)
        try container.encodeIfPresent(displayOriginalAmount, forKey: .displayOriginalAmount)
        try container.encodeIfPresent(displayTotalDiscount, forKey: .displayTotalDiscount)
        try container.encodeIfPresent(originalAmount, forKey: .originalAmount)
        try container.encodeIfPresent(totalDiscount, forKey: .totalDiscount)
    }
}

