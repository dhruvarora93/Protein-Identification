var mongoose_lib = require('mongoose');
var Schema = mongoose_lib.Schema;
var protein = new Schema({

    test_id: String,
    gene: String,
    gene_id: String,
    gene1: String,
    locus: String,
    sample_1: String,
    sample_2: String,
    status: String,
    value1: String,
    value2: String,
    fold_change: String,
    test_stat: String,
    pvalue: String,
    qvalue:String,
    significant:String

});

module.exports = mongoose_lib.model('protein', protein);