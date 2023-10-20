package com.deuna.maven

import android.os.Handler
import android.os.Looper
import android.util.Log
import android.view.View
import android.webkit.CookieManager
import android.webkit.JavascriptInterface
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import com.deuna.maven.domain.Callbacks
import com.deuna.maven.domain.DeUnaBridge
import com.deuna.maven.domain.ElementType
import com.deuna.maven.domain.Environment
import com.deuna.maven.domain.OrderErrorResponse
import com.deuna.maven.domain.OrderSuccessResponse
import kotlinx.coroutines.DelicateCoroutinesApi
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.json.JSONException
import org.json.JSONObject

class DeUnaSdk {
    private lateinit var apiKey: String
    private lateinit var orderToken: String
    private lateinit var environment: Environment
    private lateinit var elementType: ElementType
    private lateinit var userToken: String
    private var baseUrl: String = "https://elements.euna"
    private var actionMillisecods = 5000L

    companion object {
        private lateinit var instance: DeUnaSdk

        fun config(
            apiKey: String? = null,
            orderToken: String? = null,
            userToken: String? = null,
            environment: Environment,
            elementType: ElementType? = null
        ) {
            instance = DeUnaSdk().apply {
                if (apiKey != null) {
                    this.apiKey = apiKey
                }
                if (orderToken != null) {
                    this.orderToken = orderToken
                }

                if (userToken != null) {
                    this.userToken = userToken
                }
                this.environment = environment
                if (this.environment == Environment.DEVELOPMENT) {
                    this.baseUrl = "https://pay.stg.deuna.com"
                } else {
                    this.baseUrl = "https://pay.deuna.com"
                }
                if (elementType != null) {
                    this.elementType = elementType
                }
            }
        }

        @OptIn(DelicateCoroutinesApi::class)
        fun initCheckout(
            view: View
        ): Callbacks {
            instance.apply {
                val callbacks = Callbacks()
                val cookieManager = CookieManager.getInstance()
                cookieManager.setAcceptCookie(true)

                val webView: WebView = view.findViewById(R.id.deuna_webview)

                webView.webViewClient = object : WebViewClient() {
                    override fun onPageFinished(view: WebView?, url: String?) {
                        super.onPageFinished(view, url)

                        GlobalScope.launch(Dispatchers.Main) {
                            Handler(Looper.getMainLooper()).postDelayed({
                                try {
                                    callbacks.onClose?.invoke(webView)
                                } catch (e: Exception) {
                                    callbacks.onClose?.invoke(webView)
                                    e.localizedMessage?.let { }
                                }
                            }, actionMillisecods)
                        }
                    }

                    override fun onReceivedError(
                        view: WebView?,
                        request: WebResourceRequest?,
                        error: WebResourceError?
                    ) {
                        super.onReceivedError(view, request, error)
                    }
                }
                webView.settings.domStorageEnabled = true
                webView.settings.javaScriptEnabled = true
                webView.settings.cacheMode = WebSettings.LOAD_CACHE_ELSE_NETWORK
                webView.loadUrl("$baseUrl/$orderToken")
                webView.addJavascriptInterface(DeUnaBridge(callbacks), "android")
                return callbacks
            }
        }

        @OptIn(DelicateCoroutinesApi::class)
        fun initElements(
            view: View
        ): Callbacks {
            instance.apply {
                val callbacks = Callbacks()
                val cookieManager = CookieManager.getInstance()
                cookieManager.setAcceptCookie(true)

                val webView: WebView = view.findViewById(R.id.deuna_webview)
                webView.webViewClient = object : WebViewClient() {
                    override fun onPageFinished(view: WebView?, url: String?) {
                        super.onPageFinished(view, url)
                        GlobalScope.launch(Dispatchers.Main) {

                        }
                    }

                    override fun onReceivedError(
                        view: WebView?,
                        request: WebResourceRequest?,
                        error: WebResourceError?
                    ) {
                        super.onReceivedError(view, request, error)
                    }

                }
                webView.settings.domStorageEnabled = true
                webView.settings.javaScriptEnabled = true
                webView.settings.cacheMode = WebSettings.LOAD_CACHE_ELSE_NETWORK
                val url = "$baseUrl/elements/${elementType.value}"
                webView.loadUrl(url)
                webView.addJavascriptInterface(DeUnaBridge(callbacks), "android")
                return callbacks
            }
        }
    }
}