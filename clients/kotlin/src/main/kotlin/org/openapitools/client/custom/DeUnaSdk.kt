import android.os.Handler
import android.os.Looper
import android.webkit.CookieManager
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import kotlinx.coroutines.*
import org.openapitools.client.apis.OrderApi
import org.openapitools.client.models.OrderToken200Response


class DeUnaSdk {
    private lateinit var apiKey: String
    private lateinit var orderToken: String
    private lateinit var orderApi: OrderApi

    inner class Callbacks {
        var onSuccess: ((OrderToken200Response) -> Unit)? = null
        var onError: ((String) -> Unit)? = null
        var onClose: ((WebView) -> Unit)? = null
    }

    companion object {
        private lateinit var instance: DeUnaSdk

        fun config(apiKey: String, orderToken: String) {
            instance = DeUnaSdk().apply {
                this.apiKey = apiKey
                this.orderToken = orderToken
                this.orderApi = OrderApi().apply {
                }
            }
        }

        @OptIn(DelicateCoroutinesApi::class)
        fun init(
                webView: WebView
        ): Callbacks {
            instance.apply {
                val callbacks = Callbacks()
                val cookieManager = CookieManager.getInstance()
                cookieManager.setAcceptCookie(true)
                webView.setWebViewClient(object : WebViewClient() {
                    override fun onPageFinished(view: WebView?, url: String?) {
                        super.onPageFinished(view, url)

                        GlobalScope.launch(Dispatchers.Main) {
                            Handler(Looper.getMainLooper()).postDelayed({
                                try {
                                    val order = runBlocking {
                                        orderApi.getOrder(orderToken = orderToken, xApiKey = apiKey)
                                    }
                                    callbacks.onClose?.invoke(webView)
                                    callbacks.onSuccess?.invoke(order)
                                } catch (e: Exception) {
                                    callbacks.onClose?.invoke(webView)
                                    callbacks.onError?.invoke(e.localizedMessage)
                                }
                            }, 5000) // 5000 milisegundos = 5 segundos
                        }
                    }

                    @Suppress("OverridingDeprecatedMember")
                    override fun onReceivedError(
                            view: WebView?,
                            errorCode: Int,
                            description: String?,
                            failingUrl: String?
                    ) {
                        super.onReceivedError(view, errorCode, description, failingUrl)
                    }
                })
                webView.settings.domStorageEnabled = true
                webView.settings.javaScriptEnabled = true
                webView.settings.cacheMode = WebSettings.LOAD_CACHE_ELSE_NETWORK
                webView.loadUrl("https://develop.dlbinhdcmjzvl.amplifyapp.com/$orderToken")
                return callbacks
            }
        }
        @OptIn(DelicateCoroutinesApi::class)
        fun initElements(
                webView: WebView
        ): Callbacks {
            instance.apply {
                val callbacks = Callbacks()
                val cookieManager = CookieManager.getInstance()
                cookieManager.setAcceptCookie(true)
                webView.setWebViewClient(object : WebViewClient() {
                    override fun onPageFinished(view: WebView?, url: String?) {
                        super.onPageFinished(view, url)

                        GlobalScope.launch(Dispatchers.Main) {

                        }
                    }

                    @Suppress("OverridingDeprecatedMember")
                    override fun onReceivedError(
                            view: WebView?,
                            errorCode: Int,
                            description: String?,
                            failingUrl: String?
                    ) {
                        super.onReceivedError(view, errorCode, description, failingUrl)
                    }
                })
                webView.settings.domStorageEnabled = true
                webView.settings.javaScriptEnabled = true
                webView.settings.cacheMode = WebSettings.LOAD_CACHE_ELSE_NETWORK
                webView.loadUrl("https://develop.dlbinhdcmjzvl.amplifyapp.com/$orderToken")
                return callbacks
            }
        }
    }
}