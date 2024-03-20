<template>
  <div class="container w-full mx-auto">
    <div class="product">
      <div class="breadcrumbs">
        <a href="#" class="hidden md:block">Home</a>
        <a href="#" class="hidden md:block">Stainless steel furniture</a>
        <a href="#">shelves </a>
        <a href="#">Stainless steel shelves </a>
        <a href="#">Stainless steel shelf Basic 1500x500x1800 mm</a>
      </div>

      <div class="product__header">
        <div class="manufacturer">
          <img src="/images/logo-de.svg" alt="Catering supplies" />
        </div>

        <h1 class="product__name">
          Stainless steel shelf Basic 1500x500x1800 mm
        </h1>
        <div class="flex flex-wrap items-center gap-4">
          <div class="product__rating">
            <img src="/images/ratings.jpg" alt="" />
          </div>
          <div class="product__sku">Item no.: GH-RR-BASIC1550</div>
        </div>
      </div>

      <div class="product__content">
        <div class="product__content__top">
          <div class="product__gallery">
            <div class="product-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-percent"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
                />
              </svg>
              Sale
            </div>

            <div class="vue-magnifier-container">
              <div class="image">
                <img src="/images/product-1.png" alt="" />
              </div>
            </div>
            <div class="zoom-hint">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-zoom-in"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                />
                <path
                  d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
                />
              </svg>
              For a larger view, drag your mouse over the image.
            </div>
            <div class="carousel__thumbs">
              <div class="carousel__thumb">
                <img src="/images/product-1.png" alt="" />
              </div>
              <div class="carousel__thumb">
                <img src="/images/product-2.jpg" alt="" />
              </div>
              <div class="carousel__thumb">
                <img src="/images/product-3.jpg" alt="" />
              </div>
              <div class="carousel__thumb">
                <img src="/images/product-4.jpg" alt="" />
              </div>
            </div>
          </div>

          <div class="product__description">
            <div class="feature-list">
              <ul>
                <li>Optimal storage option for catering establishments</li>
                <li>Made entirely of AISI 201 stainless steel</li>
                <li>Load capacity per shelf: approx. 70 kg</li>
                <li>Dimensions of shelves (W x D): 1500 x 500 mm</li>
                <li>Product dimensions (W x D x H): 1500 x 500 x 1800 mm</li>
              </ul>
            </div>
            <div class="buy-box">
              <div class="buy-box__main">
                <div class="buy-box-price__badge">-53%</div>
                <div class="buy-box-price__display">
                  <span>€356</span>
                  €166.90
                </div>
                <div class="buy-box-price__tax">including VAT €198.61</div>
                <div class="buy-box-price__savings">You save: €189.10</div>

                <div class="buy-box__purchase-area">
                  <NumberInput v-model="quantity" />
                  <div class="buy-box__atc-button">
                    <button @click="addToCart">Add to Cart</button>
                  </div>
                </div>
              </div>
              <div class="buy-box__shipping">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-truck"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
                  />
                </svg>
                <div class="row__shipping__text">
                  <div
                    class="delivery-time__date"
                    v-tooltip="
                      'Estimated delivery date excluding public holidays'
                    "
                  >
                    Delivery by: May 9th, 2024
                  </div>
                  <VPopover trigger="hover">
                    <div class="shipping-information">Free shipping</div>

                    <template #popover>
                      <b>Germany</b>
                      <p>Orders are delivered free of charge within Germany. <b>Parcel and forwarding shipping is €0.00</b></b></p>

                      <b>Europe</b>
                      <p>We handle deliveries within European countries.</p>
                      <p><a href="https://www.gastro-hero.de/Versandkosten" target="_blank">Check international delivery costs</a></p>
                    </template>
                  </VPopover>

                </div>
              </div>
            </div>
            <a
              href="#"
              class="product__wishlist"
              @click.prevent="toggleFromWatchlist"
            >
              {{ isInWatchlist ? "Remove from watchlist" : "Add to watchlist" }}
            </a>
          </div>
        </div>
        <div class="product__content__bottom">
          <div class="product-information-tabs">
            <details open>
              <summary>
                Item description
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </summary>
              <div class="tab-content">
                <p><strong>Product advantages at a glance:</strong></p>
                <ul>
                  <li>
                    Wall shelf for catering, hotels, restaurants, snack bars,
                    etc.
                  </li>
                  <li>Produced according to hygiene and safety guidelines</li>
                  <li>optimal storage option</li>
                  <li>particularly easy to clean</li>
                </ul>
              </div>
            </details>

            <details>
              <summary>
                Additional Information
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </summary>
              <div class="tab-content">
                <table class="table-auto">
                  <tr>
                    <td
                      class="p-3 pl-8 border-b border-slate-100 dark:border-slate-700"
                    >
                      brand
                    </td>
                    <td
                      class="p-3 pl-8 border-b border-slate-100 dark:border-slate-700"
                    >
                      GastroHero
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="p-4 pl-8 border-b border-slate-100 dark:border-slate-700"
                    >
                      Width in mm
                    </td>
                    <td
                      class="p-3 pl-8 border-b border-slate-100 dark:border-slate-700"
                    >
                      1515
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="p-3 pl-8 border-b border-slate-100 dark:border-slate-700"
                    >
                      height
                    </td>
                    <td
                      class="p-3 pl-8 border-b border-slate-100 dark:border-slate-700"
                    >
                      1800mm
                    </td>
                  </tr>
                </table>
              </div>
            </details>

            <details>
              <summary>
                Hints
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </summary>
              <div class="tab-content">
                <ul>
                  <li>Free shipping within Germany.</li>
                  <li>
                    Electrical devices that were delivered without a plug must
                    be installed by a specialist.
                  </li>
                  <li>
                    Flushing technology devices must be installed and put into
                    operation by a specialist.
                  </li>
                  <li>
                    Gas appliances must be connected and put into operation by a
                    gas technician.
                  </li>
                  <li>
                    Refrigeration devices must be commissioned by a
                    refrigeration/air conditioning technician.
                  </li>
                  <li>
                    The illustration may differ from the original product.
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>
      <div class="product__sidebar">
        <div class="block">
          <h5>Your advantages</h5>
          <p>You can't go wrong with GastroHero:</p>
          <ul class="block__body--list">
            <li>
              <strong>Top prices:</strong> Over 40,000 items in professional
              quality at affordable prices
            </li>
            <li>
              <strong>Free shipping</strong> for orders over €25 within Germany
            </li>
            <li>
              Certified online shop with <strong>money-back guarantee</strong>
            </li>
            <li>
              <strong>Professional needs</strong> for businesses, church, social
              institutions, clubs or authorities
            </li>
            <li><strong>Risk-free:</strong> 14 day return service</li>
          </ul>
          <a href="#" class="link">all advantages</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NumberInput from "../../components/NumberInput.vue";

export default {
  components: {
    NumberInput,
  },

  data() {
    return {
      quantity: 1,
    };
  },

  computed: {
    sku() {
      return this.$route.params.sku;
    },

    product() {
      return this.$store.getters["products/getBySku"](this.sku);
    },

    isInWatchlist() {
      return this.$store.getters["watchlist/added"](this.sku);
    },
  },

  methods: {
    addToCart() {
      this.$store.dispatch("cart/add", {
        product: this.product,
        quantity: this.quantity,
      });
    },

    toggleFromWatchlist() {
      this.$store.dispatch(
        `watchlist/${this.isInWatchlist ? "remove" : "add"}`,
        this.product
      );
    },
  },
};
</script>
