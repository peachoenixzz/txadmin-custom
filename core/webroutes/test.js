const modulename = 'WebServer:Test';



/**
 * Returns the server log page
 * @param {object} ctx
 */
export default async function Test(ctx) {
    const renderData = {
        headerTitle: 'Testz',
    };
    return ctx.utils.render('main/test', renderData);
};
