import axios from 'axios'
/** axios === Frontend-ээс backend рүү HTTP request явуулах зориулалттай. */
/** axios.get()   Жишээ нь: энэ 4 үйлдлийг оруулж ирж байна
axios.post()
axios.put()
axios.delete() */
export function getProducts() {
  /** getProducts() гэдэг функц үүсгэж байна.
   * export гэсэн болохоор энэ функцийг өөр файл дээрээс:
   * import { getProducts } from '../services/productService.js'
   * гэж ашиглаж болно.
   *
   *
   */

  return axios.get('https://product-backend-2qik.onrender.com/products')
}
/*  Backend-ээс бүх бүтээгдэхүүнийг авах HTTP
    GET хүсэлтийг нэг газар төвлөрүүлж,
    бусад component-ууд ашиглах боломжтой
    функц хэлбэрээр экспортлох юм.
*/
