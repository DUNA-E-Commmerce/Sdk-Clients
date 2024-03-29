//
// OrderTokenRequest.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct OrderTokenRequest: Codable, JSONEncodable, Hashable {

    public enum OrderType: String, Codable, CaseIterable {
        case unspecified = "UNSPECIFIED"
        case deunaCheckout = "DEUNA_CHECKOUT"
        case deunaNow = "DEUNA_NOW"
        case paymentLink = "PAYMENT_LINK"
    }
    public var order: OrderTokenRequestOrder?
    /** Representa el tipo de flujo de la orden dentro de DEUNA */
    public var orderType: OrderType? = .unspecified

    public init(order: OrderTokenRequestOrder? = nil, orderType: OrderType? = .unspecified) {
        self.order = order
        self.orderType = orderType
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case order
        case orderType = "order_type"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(order, forKey: .order)
        try container.encodeIfPresent(orderType, forKey: .orderType)
    }
}

