//
// OrderTokenRequestOrder.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct OrderTokenRequestOrder: Codable, JSONEncodable, Hashable {

    public enum Currency: String, Codable, CaseIterable {
        case usd = "USD"
        case mxn = "MXN"
        case cop = "COP"
        case clp = "CLP"
        case brl = "BRL"
        case ars = "ARS"
        case pen = "PEN"
    }
    public enum Status: String, Codable, CaseIterable {
        case pending = "pending"
        case succeeded = "succeeded"
        case cancelled = "cancelled"
        case refund = "refund"
    }
    public enum Timezone: String, Codable, CaseIterable {
        case americaSlashMexicoCity = "America/Mexico_City"
    }
    static let userInstructionsRule = StringRule(minLength: 1, maxLength: nil, pattern: nil)
    public var billingAddress: OrderTokenRequestOrderBillingAddress?
    /** Cambio solicitado por el cliente */
    public var cashChange: Double?
    /** Representa la moneda de uso del comercio en 3 caracteres bajo la ISO 3166-1 alpha-3 */
    public var currency: Currency
    /** Son los descuentos aplicados en la orden */
    public var discounts: Set<OrderTokenRequestOrderDiscountsInner>?
    /** Configuración de las tarjetas de regalo */
    public var giftCard: [OrderTokenRequestOrderGiftCardInner]?
    /** Detalle de los productos que se encuentran en la orden */
    public var items: Set<OrderTokenRequestOrderItemsInner>?
    public var metadata: OrderTokenRequestOrderMetadata?
    /** Representa al identificador de la orden dentro del comercio */
    public var orderId: String
    public var payment: OrderTokenRequestOrderPayment?
    /** URL de redirección cuando se completa la orden */
    public var redirectUrl: String?
    /** Fecha de entrega */
    public var scheduledAt: String?
    public var shipping: OrderTokenRequestOrderShipping?
    public var shippingAddress: OrderTokenRequestOrderShippingAddress?
    public var shippingMethod: OrderTokenRequestOrderShippingMethod?
    /** Métodos de envío */
    public var shippingMethods: [AnyCodable]?
    public var shippingOptions: OrderTokenRequestOrderShippingOptions?
    /** Estado de la orden  */
    public var status: Status?
    /** El **store_code** corresponde al código de una tienda, es decir, el comercio podría tener múltiples tiendas (sucursales) para los cuales el **store_code** sirve como identificar de las mismas, en caso de ser un comercio sin tiendas *(sucursales)* el valor por defecto deberá ser ***all***. <br> **Nota:** Este valor es muy importante dado que las configuraciones del Admin serán aplicados según el código de las tiendas o **store_code** */
    public var storeCode: String
    /** Es el monto del subtotal de la compra. Este monto es sin impuestos. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. */
    public var subTotal: Double
    /** Representa la zona horario del comercio. */
    public var timezone: Timezone?
    /** Es el total de la orden esto comprende la suma del total de sub_total y total_tax_amount. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. */
    public var totalAmount: Double
    /** Es el total de los descuentos de la orden. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. */
    public var totalDiscount: Double?
    /** Es el total de los impuestos de la orden. Deberá estar expresado en centavos, por ejemplo si el monto es $10.00 estará representado como 1000 lo que significa 10 dólares 0 centavos. */
    public var totalTaxAmount: Double
    /** Son las instrucciones especiales que da el cliente en su compra, este valor se sustituye por el comentario en caso que el cliente lo coloque dentro del *checkout* */
    public var userInstructions: String?
    public var webhookUrls: OrderTokenRequestOrderWebhookUrls?

    public init(billingAddress: OrderTokenRequestOrderBillingAddress? = nil, cashChange: Double? = nil, currency: Currency, discounts: Set<OrderTokenRequestOrderDiscountsInner>? = nil, giftCard: [OrderTokenRequestOrderGiftCardInner]? = nil, items: Set<OrderTokenRequestOrderItemsInner>? = nil, metadata: OrderTokenRequestOrderMetadata? = nil, orderId: String, payment: OrderTokenRequestOrderPayment? = nil, redirectUrl: String? = nil, scheduledAt: String? = nil, shipping: OrderTokenRequestOrderShipping? = nil, shippingAddress: OrderTokenRequestOrderShippingAddress? = nil, shippingMethod: OrderTokenRequestOrderShippingMethod? = nil, shippingMethods: [AnyCodable]? = nil, shippingOptions: OrderTokenRequestOrderShippingOptions? = nil, status: Status? = nil, storeCode: String, subTotal: Double, timezone: Timezone? = nil, totalAmount: Double, totalDiscount: Double? = nil, totalTaxAmount: Double, userInstructions: String? = nil, webhookUrls: OrderTokenRequestOrderWebhookUrls? = nil) {
        self.billingAddress = billingAddress
        self.cashChange = cashChange
        self.currency = currency
        self.discounts = discounts
        self.giftCard = giftCard
        self.items = items
        self.metadata = metadata
        self.orderId = orderId
        self.payment = payment
        self.redirectUrl = redirectUrl
        self.scheduledAt = scheduledAt
        self.shipping = shipping
        self.shippingAddress = shippingAddress
        self.shippingMethod = shippingMethod
        self.shippingMethods = shippingMethods
        self.shippingOptions = shippingOptions
        self.status = status
        self.storeCode = storeCode
        self.subTotal = subTotal
        self.timezone = timezone
        self.totalAmount = totalAmount
        self.totalDiscount = totalDiscount
        self.totalTaxAmount = totalTaxAmount
        self.userInstructions = userInstructions
        self.webhookUrls = webhookUrls
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case billingAddress = "billing_address"
        case cashChange = "cash_change"
        case currency
        case discounts
        case giftCard = "gift_card"
        case items
        case metadata
        case orderId = "order_id"
        case payment
        case redirectUrl = "redirect_url"
        case scheduledAt = "scheduled_at"
        case shipping
        case shippingAddress = "shipping_address"
        case shippingMethod = "shipping_method"
        case shippingMethods = "shipping_methods"
        case shippingOptions = "shipping_options"
        case status
        case storeCode = "store_code"
        case subTotal = "sub_total"
        case timezone
        case totalAmount = "total_amount"
        case totalDiscount = "total_discount"
        case totalTaxAmount = "total_tax_amount"
        case userInstructions = "user_instructions"
        case webhookUrls = "webhook_urls"
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(billingAddress, forKey: .billingAddress)
        try container.encodeIfPresent(cashChange, forKey: .cashChange)
        try container.encode(currency, forKey: .currency)
        try container.encodeIfPresent(discounts, forKey: .discounts)
        try container.encodeIfPresent(giftCard, forKey: .giftCard)
        try container.encodeIfPresent(items, forKey: .items)
        try container.encodeIfPresent(metadata, forKey: .metadata)
        try container.encode(orderId, forKey: .orderId)
        try container.encodeIfPresent(payment, forKey: .payment)
        try container.encodeIfPresent(redirectUrl, forKey: .redirectUrl)
        try container.encodeIfPresent(scheduledAt, forKey: .scheduledAt)
        try container.encodeIfPresent(shipping, forKey: .shipping)
        try container.encodeIfPresent(shippingAddress, forKey: .shippingAddress)
        try container.encodeIfPresent(shippingMethod, forKey: .shippingMethod)
        try container.encodeIfPresent(shippingMethods, forKey: .shippingMethods)
        try container.encodeIfPresent(shippingOptions, forKey: .shippingOptions)
        try container.encodeIfPresent(status, forKey: .status)
        try container.encode(storeCode, forKey: .storeCode)
        try container.encode(subTotal, forKey: .subTotal)
        try container.encodeIfPresent(timezone, forKey: .timezone)
        try container.encode(totalAmount, forKey: .totalAmount)
        try container.encodeIfPresent(totalDiscount, forKey: .totalDiscount)
        try container.encode(totalTaxAmount, forKey: .totalTaxAmount)
        try container.encodeIfPresent(userInstructions, forKey: .userInstructions)
        try container.encodeIfPresent(webhookUrls, forKey: .webhookUrls)
    }
}

