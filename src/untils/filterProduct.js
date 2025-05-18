const filterProduct = (productsRaw, filter) => {
  console.log("productsRaw", productsRaw);
  console.log("filter", filter);
  // Giá
  let temp = [...productsRaw];
  if (filter.price) {
    const { min, max } = filter.price;
    temp = temp.filter((item) => {
      if (min && max) {
        return item.price >= min && item.price <= max;
      } else if (min) {
        return item.price >= min;
      } else if (max) {
        return item.price <= max;
      }
      return true;
    });
  }
  if (filter.brand && filter.brand.length > 0) {
    temp = temp.filter((item) => filter.brand.includes(item.manufacturer));
  }
  if (filter.country && filter.country.length > 0) {
    temp = temp.filter((item) =>
      filter.country.includes(item.manufacturingCountry)
    );
  }
  if (filter.sort) {
    if (filter.sort === "sold") {
      temp = temp.sort((a, b) => b.sales - a.sales);
    } else if (filter.sort === "liked") {
      temp = temp.sort((a, b) => b.likes - a.likes);
    }
  }
  return temp;
};

export default filterProduct;
