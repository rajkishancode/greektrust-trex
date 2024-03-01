const getUniqueItems = (prop, products) => {
  return products?.reduce((acc, currentItem) => {
    if (!acc.includes(currentItem[prop])) return [...acc, currentItem[prop]];
    else return acc;
  }, []);
};

const filterProducts = (products, appliedFilters) => {
  const typeFilteredData =
    appliedFilters?.type?.length > 0
      ? products.filter((item) =>
          appliedFilters.type.some((ele) => ele === item.type)
        )
      : products;

  const genderFilteredData =
    appliedFilters?.gender?.length > 0
      ? typeFilteredData.filter((item) =>
          appliedFilters.gender.some((ele) => ele === item.gender)
        )
      : typeFilteredData;

  const colorFilteredData =
    appliedFilters?.color?.length > 0
      ? genderFilteredData.filter((item) =>
          appliedFilters.color.some((ele) => ele === item.color)
        )
      : genderFilteredData;

  const priceFilteredData = colorFilteredData.filter(
    (item) =>
      item.price >= appliedFilters.priceRange.min &&
      item.price <= appliedFilters.priceRange.max
  );

  const searchFilteredData =
    appliedFilters?.search?.length > 0
      ? priceFilteredData.filter((item) => {
          const searchTerms = appliedFilters.search.toLowerCase().split(" ");
          const searchableFields = ["type", "color", "name"]; // Specify searchable fields

          return searchTerms.every((term) =>
            searchableFields.some((field) =>
              item[field].toLowerCase().includes(term)
            )
          );
        })
      : priceFilteredData;

  return searchFilteredData;
};

export { getUniqueItems, filterProducts };
