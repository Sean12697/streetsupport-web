
// Common modules
import '../../common'

const ko = require('knockout')

const OrgRetrieval = require('../../models/all-organisations/listing')
const model = new OrgRetrieval((o) => o.donationUrl, 6)
ko.applyBindings(model)
