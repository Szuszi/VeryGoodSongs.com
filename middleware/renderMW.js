/**
 * Render the given values into a template
 */

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        res.render(viewName, res.locals)
        console.log('render: ' + viewName);
    };
};