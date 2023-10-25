package com.deuna.maven.domain

import android.util.Log
import android.webkit.JavascriptInterface
import android.webkit.WebView
import org.json.JSONException
import org.json.JSONObject

class DeUnaBridge(private val callbacks: Callbacks, private val webView: WebView) {
    @JavascriptInterface
    fun sendMessage(message: String) {
        try {
            val json = JSONObject(message)
            when (json.getString("type")) {
                CheckoutEvents.PURCHASE_REJECTED.toString() -> {
                    callbacks
                        .onError?.invoke(
                            OrderErrorResponse.fromJson(json.getJSONObject("data")),
                            null
                        )
                }
                CheckoutEvents.PURCHASE_SUCCESS.toString() -> {
                    callbacks.onSuccess?.invoke(
                        OrderSuccessResponse.fromJson(
                            json.getJSONObject(
                                "data"
                            )
                        )
                    )
                }
                CheckoutEvents.LINK_CLOSED.toString() -> {
                    callbacks.onClose?.invoke(
                        webView
                    )
                }
            }
        } catch (e: JSONException) {
            callbacks.onError?.invoke(null, message)
        }
    }
}