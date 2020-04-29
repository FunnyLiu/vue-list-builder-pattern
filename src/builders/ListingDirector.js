import ProductListingItem from "../components/ProductListingItem.vue";
import ProductProvider from "../components/ProductProvider.vue";

import UserListingItem from "../components/UserListingItem.vue";
import UserProvider from "../components/UserProvider.vue";

export default class ListingDirector {
  constructor(builder) {
    this.builder = builder;
  }

  makeProductListing() {
    return this.builder
      .withProvider(ProductProvider)
      .withListingItem(ProductListingItem)
      .showFilter()
      .showPagination()
      .view("grid")
      .build();
  }

  makeUserListing() {
    return this.builder
      .withProvider(UserProvider)
      .withListingItem(UserListingItem)
      .showPagination()
      .view("table")
      .build();
  }
}
