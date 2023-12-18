module.exports = {
    pageValues: (query) => {
        const limit = query.limit ? parseInt(query.limit) : 10;
        const page = query.page ? parseInt(query.page) : 1;
        const skip = page == 1 ? 0 : (limit * page - limit);

        const values = { limit, page, skip };
        return values
    },
    pageResponse: (items, page, limit) => {
        const count = items.count?.length
            ? items.count
                .map(item => item.count)
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            : items.count;
        const pages = limit == 0 ? 1 : Math.ceil(count / limit);
        return ({
            items: items.rows,
            page,
            limit,
            pages: (pages ? pages : 0),
            total: count,
            // count: items.count
        })
    },
}