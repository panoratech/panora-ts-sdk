# panora-ts

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/panoratech/panora-ts-sdk
```

### PNPM

```bash
pnpm add https://github.com/panoratech/panora-ts-sdk
```

### Bun

```bash
bun add https://github.com/panoratech/panora-ts-sdk
```

### Yarn

```bash
yarn add https://github.com/panoratech/panora-ts-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
    jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await panora.getHello();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [Panora SDK](docs/sdks/panora/README.md)

* [getHello](docs/sdks/panora/README.md#gethello)
* [getHealth](docs/sdks/panora/README.md#gethealth)
* [getHelloProtected](docs/sdks/panora/README.md#gethelloprotected)

### [auth](docs/sdks/auth/README.md)

* [signUp](docs/sdks/auth/README.md#signup) - Register
* [signIn](docs/sdks/auth/README.md#signin) - Log In
* [getPanoraCoreUsers](docs/sdks/auth/README.md#getpanoracoreusers) - Get users
* [authControllerGetProfile](docs/sdks/auth/README.md#authcontrollergetprofile)
* [getApiKeys](docs/sdks/auth/README.md#getapikeys) - Retrieve API Keys
* [deleteApiKey](docs/sdks/auth/README.md#deleteapikey) - Delete API Keys
* [generateApiKey](docs/sdks/auth/README.md#generateapikey) - Create API Key
* [refreshAccessToken](docs/sdks/auth/README.md#refreshaccesstoken) - Refresh Access Token

### [connections](docs/sdks/connections/README.md)

* [handleOAuthCallback](docs/sdks/connections/README.md#handleoauthcallback) - Capture oAuth callback
* [connectionsControllerHandleGorgiasAuthUrl](docs/sdks/connections/README.md#connectionscontrollerhandlegorgiasauthurl)
* [getConnections](docs/sdks/connections/README.md#getconnections) - List Connections

### [webhook](docs/sdks/webhook/README.md)

* [getWebhooksMetadata](docs/sdks/webhook/README.md#getwebhooksmetadata) - Retrieve webhooks metadata 
* [createWebhookMetadata](docs/sdks/webhook/README.md#createwebhookmetadata) - Add webhook metadata
* [deleteWebhook](docs/sdks/webhook/README.md#deletewebhook) - Delete Webhook
* [updateWebhookStatus](docs/sdks/webhook/README.md#updatewebhookstatus) - Update webhook status
* [verifyEvent](docs/sdks/webhook/README.md#verifyevent) - Verify payload sgnature of the webhook

### [managedWebhooks](docs/sdks/managedwebhooks/README.md)

* [getManagedWebhooks](docs/sdks/managedwebhooks/README.md#getmanagedwebhooks) - Retrieve managed webhooks
* [updateManagedWebhooksStatus](docs/sdks/managedwebhooks/README.md#updatemanagedwebhooksstatus) - Update managed webhook status
* [createManagedWebhook](docs/sdks/managedwebhooks/README.md#createmanagedwebhook) - Create managed webhook
* [createRemoteThirdPartyWebhook](docs/sdks/managedwebhooks/README.md#createremotethirdpartywebhook) - Create Remote Third Party Webhook

### [mw](docs/sdks/mw/README.md)

* [handleThirdPartyWebhook](docs/sdks/mw/README.md#handlethirdpartywebhook) - Handle Third Party Webhook

### [ticketingTickets](docs/sdks/ticketingtickets/README.md)

* [getTickets](docs/sdks/ticketingtickets/README.md#gettickets) - List a batch of Tickets
* [addTicket](docs/sdks/ticketingtickets/README.md#addticket) - Create a Ticket
* [updateTicket](docs/sdks/ticketingtickets/README.md#updateticket) - Update a Ticket
* [getTicket](docs/sdks/ticketingtickets/README.md#getticket) - Retrieve a Ticket
* [addTickets](docs/sdks/ticketingtickets/README.md#addtickets) - Add a batch of Tickets

### [ticketingUsers](docs/sdks/ticketingusers/README.md)

* [getTicketingUsers](docs/sdks/ticketingusers/README.md#getticketingusers) - List a batch of Users
* [getTicketingUser](docs/sdks/ticketingusers/README.md#getticketinguser) - Retrieve a User

### [ticketingAccounts](docs/sdks/ticketingaccounts/README.md)

* [getTicketingAccounts](docs/sdks/ticketingaccounts/README.md#getticketingaccounts) - List a batch of Accounts
* [getTicketingAccount](docs/sdks/ticketingaccounts/README.md#getticketingaccount) - Retrieve an Account

### [ticketingContacts](docs/sdks/ticketingcontacts/README.md)

* [getTicketingContacts](docs/sdks/ticketingcontacts/README.md#getticketingcontacts) - List all Contacts
* [getTicketingContact](docs/sdks/ticketingcontacts/README.md#getticketingcontact) - Retrieve a Contact

### [crmCompanies](docs/sdks/crmcompanies/README.md)

* [getCompanies](docs/sdks/crmcompanies/README.md#getcompanies) - List a batch of Companies
* [addCrmCompany](docs/sdks/crmcompanies/README.md#addcrmcompany) - Create a Company
* [updateCompany](docs/sdks/crmcompanies/README.md#updatecompany) - Update a Company
* [getCrmCompany](docs/sdks/crmcompanies/README.md#getcrmcompany) - Retrieve a Company
* [addCompanies](docs/sdks/crmcompanies/README.md#addcompanies) - Add a batch of Companies

### [crmContacts](docs/sdks/crmcontacts/README.md)

* [getCrmContacts](docs/sdks/crmcontacts/README.md#getcrmcontacts) - List a batch of CRM Contacts
* [addCrmContact](docs/sdks/crmcontacts/README.md#addcrmcontact) - Create CRM Contact
* [updateContact](docs/sdks/crmcontacts/README.md#updatecontact) - Update a CRM Contact
* [getCrmContact](docs/sdks/crmcontacts/README.md#getcrmcontact) - Retrieve a CRM Contact
* [addCrmContacts](docs/sdks/crmcontacts/README.md#addcrmcontacts) - Add a batch of CRM Contacts

### [crmDeals](docs/sdks/crmdeals/README.md)

* [getDeals](docs/sdks/crmdeals/README.md#getdeals) - List a batch of Deals
* [addDeal](docs/sdks/crmdeals/README.md#adddeal) - Create a Deal
* [getDeal](docs/sdks/crmdeals/README.md#getdeal) - Retrieve a Deal
* [updateDeal](docs/sdks/crmdeals/README.md#updatedeal) - Update a Deal
* [addDeals](docs/sdks/crmdeals/README.md#adddeals) - Add a batch of Deals

### [crmEngagements](docs/sdks/crmengagements/README.md)

* [getEngagements](docs/sdks/crmengagements/README.md#getengagements) - List a batch of Engagements
* [addEngagement](docs/sdks/crmengagements/README.md#addengagement) - Create a Engagement
* [updateEngagement](docs/sdks/crmengagements/README.md#updateengagement) - Update a Engagement
* [getEngagement](docs/sdks/crmengagements/README.md#getengagement) - Retrieve a Engagement
* [addEngagements](docs/sdks/crmengagements/README.md#addengagements) - Add a batch of Engagements

### [crmNotes](docs/sdks/crmnotes/README.md)

* [getNotes](docs/sdks/crmnotes/README.md#getnotes) - List a batch of Notes
* [addNote](docs/sdks/crmnotes/README.md#addnote) - Create a Note
* [getNote](docs/sdks/crmnotes/README.md#getnote) - Retrieve a Note
* [addNotes](docs/sdks/crmnotes/README.md#addnotes) - Add a batch of Notes

### [crmStages](docs/sdks/crmstages/README.md)

* [getStages](docs/sdks/crmstages/README.md#getstages) - List a batch of Stages
* [getStage](docs/sdks/crmstages/README.md#getstage) - Retrieve a Stage

### [crmTasks](docs/sdks/crmtasks/README.md)

* [getTasks](docs/sdks/crmtasks/README.md#gettasks) - List a batch of Tasks
* [addTask](docs/sdks/crmtasks/README.md#addtask) - Create a Task
* [updateTask](docs/sdks/crmtasks/README.md#updatetask) - Update a Task
* [getTask](docs/sdks/crmtasks/README.md#gettask) - Retrieve a Task
* [addTasks](docs/sdks/crmtasks/README.md#addtasks) - Add a batch of Tasks

### [crmUsers](docs/sdks/crmusers/README.md)

* [getCrmUsers](docs/sdks/crmusers/README.md#getcrmusers) - List a batch of Users
* [getCrmUser](docs/sdks/crmusers/README.md#getcrmuser) - Retrieve a User

### [ticketingCollections](docs/sdks/ticketingcollections/README.md)

* [getCollections](docs/sdks/ticketingcollections/README.md#getcollections) - List a batch of Collections
* [getCollection](docs/sdks/ticketingcollections/README.md#getcollection) - Retrieve a Collection

### [ticketingComments](docs/sdks/ticketingcomments/README.md)

* [getComments](docs/sdks/ticketingcomments/README.md#getcomments) - List a batch of Comments
* [addComment](docs/sdks/ticketingcomments/README.md#addcomment) - Create a Comment
* [getComment](docs/sdks/ticketingcomments/README.md#getcomment) - Retrieve a Comment
* [addComments](docs/sdks/ticketingcomments/README.md#addcomments) - Add a batch of Comments

### [ticketingTags](docs/sdks/ticketingtags/README.md)

* [getTicketingTags](docs/sdks/ticketingtags/README.md#getticketingtags) - List a batch of Tags
* [getTicketingTag](docs/sdks/ticketingtags/README.md#getticketingtag) - Retrieve a Tag

### [ticketingTeams](docs/sdks/ticketingteams/README.md)

* [getTeams](docs/sdks/ticketingteams/README.md#getteams) - List a batch of Teams
* [getTeam](docs/sdks/ticketingteams/README.md#getteam) - Retrieve a Team

### [linkedUsers](docs/sdks/linkedusers/README.md)

* [addLinkedUser](docs/sdks/linkedusers/README.md#addlinkeduser) - Add Linked User
* [fetchLinkedUsers](docs/sdks/linkedusers/README.md#fetchlinkedusers) - Retrieve Linked Users
* [addBatchLinkedUsers](docs/sdks/linkedusers/README.md#addbatchlinkedusers) - Add Batch Linked Users
* [getLinkedUser](docs/sdks/linkedusers/README.md#getlinkeduser) - Retrieve a Linked User
* [linkedUserFromRemoteId](docs/sdks/linkedusers/README.md#linkeduserfromremoteid) - Retrieve a Linked User From A Remote Id

### [organisations](docs/sdks/organisations/README.md)

* [getOrganisations](docs/sdks/organisations/README.md#getorganisations) - Retrieve Organisations
* [createOrganisation](docs/sdks/organisations/README.md#createorganisation) - Create an Organisation

### [projects](docs/sdks/projects/README.md)

* [getProjects](docs/sdks/projects/README.md#getprojects) - Retrieve projects
* [createProject](docs/sdks/projects/README.md#createproject) - Create a project

### [fieldMappings](docs/sdks/fieldmappings/README.md)

* [getFieldMappingsEntities](docs/sdks/fieldmappings/README.md#getfieldmappingsentities) - Retrieve field mapping entities
* [getFieldMappings](docs/sdks/fieldmappings/README.md#getfieldmappings) - Retrieve field mappings
* [getFieldMappingValues](docs/sdks/fieldmappings/README.md#getfieldmappingvalues) - Retrieve field mappings values
* [defineTargetField](docs/sdks/fieldmappings/README.md#definetargetfield) - Define target Field
* [createCustomField](docs/sdks/fieldmappings/README.md#createcustomfield) - Create Custom Field
* [mapField](docs/sdks/fieldmappings/README.md#mapfield) - Map Custom Field
* [getCustomProviderProperties](docs/sdks/fieldmappings/README.md#getcustomproviderproperties) - Retrieve Custom Properties

### [events](docs/sdks/events/README.md)

* [getPanoraCoreEvents](docs/sdks/events/README.md#getpanoracoreevents) - Retrieve Events
* [getEventsCount](docs/sdks/events/README.md#geteventscount) - Retrieve Events Count

### [magicLinks](docs/sdks/magiclinks/README.md)

* [createMagicLink](docs/sdks/magiclinks/README.md#createmagiclink) - Create a Magic Link
* [getMagicLinks](docs/sdks/magiclinks/README.md#getmagiclinks) - Retrieve Magic Links
* [getMagicLink](docs/sdks/magiclinks/README.md#getmagiclink) - Retrieve a Magic Link

### [passthrough](docs/sdks/passthrough/README.md)

* [passthroughRequest](docs/sdks/passthrough/README.md#passthroughrequest) - Make a passthrough request

### [connectionsStrategies](docs/sdks/connectionsstrategies/README.md)

* [createConnectionStrategy](docs/sdks/connectionsstrategies/README.md#createconnectionstrategy) - Create Connection Strategy
* [toggleConnectionStrategy](docs/sdks/connectionsstrategies/README.md#toggleconnectionstrategy) - Activate/Deactivate Connection Strategy
* [deleteConnectionStrategy](docs/sdks/connectionsstrategies/README.md#deleteconnectionstrategy) - Delete Connection Strategy
* [updateConnectionStrategy](docs/sdks/connectionsstrategies/README.md#updateconnectionstrategy) - Update Connection Strategy
* [getConnectionStrategyCredentials](docs/sdks/connectionsstrategies/README.md#getconnectionstrategycredentials) - Get Connection Strategy Credential
* [getCredentials](docs/sdks/connectionsstrategies/README.md#getcredentials) - Fetch credentials info needed for connections
* [getConnectionStrategiesForProject](docs/sdks/connectionsstrategies/README.md#getconnectionstrategiesforproject) - Fetch All Connection Strategies for Project

### [syncs](docs/sdks/syncs/README.md)

* [getSyncStatus](docs/sdks/syncs/README.md#getsyncstatus) - Retrieve sync status of a certain vertical
* [resync](docs/sdks/syncs/README.md#resync) - Resync common objects across a vertical

### [projectConnectors](docs/sdks/projectconnectors/README.md)

* [updateConnectorsToProject](docs/sdks/projectconnectors/README.md#updateconnectorstoproject) - Update Connectors for a project
* [getConnectorsFromProject](docs/sdks/projectconnectors/README.md#getconnectorsfromproject) - Retrieve connectors by Project Id

### [hrisBankinfo](docs/sdks/hrisbankinfo/README.md)

* [getBankinfos](docs/sdks/hrisbankinfo/README.md#getbankinfos) - List a batch of Bankinfos
* [addBankinfo](docs/sdks/hrisbankinfo/README.md#addbankinfo) - Create a Bankinfo
* [getBankinfo](docs/sdks/hrisbankinfo/README.md#getbankinfo) - Retrieve a Bankinfo
* [addBankinfos](docs/sdks/hrisbankinfo/README.md#addbankinfos) - Add a batch of Bankinfos

### [hrisBenefit](docs/sdks/hrisbenefit/README.md)

* [getBenefits](docs/sdks/hrisbenefit/README.md#getbenefits) - List a batch of Benefits
* [addBenefit](docs/sdks/hrisbenefit/README.md#addbenefit) - Create a Benefit
* [getBenefit](docs/sdks/hrisbenefit/README.md#getbenefit) - Retrieve a Benefit
* [addBenefits](docs/sdks/hrisbenefit/README.md#addbenefits) - Add a batch of Benefits

### [hrisCompany](docs/sdks/hriscompany/README.md)

* [getCompanys](docs/sdks/hriscompany/README.md#getcompanys) - List a batch of Companys
* [addHrisCompany](docs/sdks/hriscompany/README.md#addhriscompany) - Create a Company
* [getHrisCompany](docs/sdks/hriscompany/README.md#gethriscompany) - Retrieve a Company
* [addCompanys](docs/sdks/hriscompany/README.md#addcompanys) - Add a batch of Companys

### [hrisDependent](docs/sdks/hrisdependent/README.md)

* [getDependents](docs/sdks/hrisdependent/README.md#getdependents) - List a batch of Dependents
* [addDependent](docs/sdks/hrisdependent/README.md#adddependent) - Create a Dependent
* [getDependent](docs/sdks/hrisdependent/README.md#getdependent) - Retrieve a Dependent
* [addDependents](docs/sdks/hrisdependent/README.md#adddependents) - Add a batch of Dependents

### [hrisEmployeepayrollrun](docs/sdks/hrisemployeepayrollrun/README.md)

* [getEmployeePayrollRuns](docs/sdks/hrisemployeepayrollrun/README.md#getemployeepayrollruns) - List a batch of EmployeePayrollRuns
* [addEmployeePayrollRun](docs/sdks/hrisemployeepayrollrun/README.md#addemployeepayrollrun) - Create a EmployeePayrollRun
* [getEmployeePayrollRun](docs/sdks/hrisemployeepayrollrun/README.md#getemployeepayrollrun) - Retrieve a EmployeePayrollRun
* [addEmployeePayrollRuns](docs/sdks/hrisemployeepayrollrun/README.md#addemployeepayrollruns) - Add a batch of EmployeePayrollRuns

### [hrisEmployee](docs/sdks/hrisemployee/README.md)

* [getEmployees](docs/sdks/hrisemployee/README.md#getemployees) - List a batch of Employees
* [addEmployee](docs/sdks/hrisemployee/README.md#addemployee) - Create a Employee
* [getEmployee](docs/sdks/hrisemployee/README.md#getemployee) - Retrieve a Employee
* [addEmployees](docs/sdks/hrisemployee/README.md#addemployees) - Add a batch of Employees

### [hrisEmployerbenefit](docs/sdks/hrisemployerbenefit/README.md)

* [getEmployerBenefits](docs/sdks/hrisemployerbenefit/README.md#getemployerbenefits) - List a batch of EmployerBenefits
* [addEmployerBenefit](docs/sdks/hrisemployerbenefit/README.md#addemployerbenefit) - Create a EmployerBenefit
* [getEmployerBenefit](docs/sdks/hrisemployerbenefit/README.md#getemployerbenefit) - Retrieve a EmployerBenefit
* [addEmployerBenefits](docs/sdks/hrisemployerbenefit/README.md#addemployerbenefits) - Add a batch of EmployerBenefits

### [hrisEmployment](docs/sdks/hrisemployment/README.md)

* [getEmployments](docs/sdks/hrisemployment/README.md#getemployments) - List a batch of Employments
* [addEmployment](docs/sdks/hrisemployment/README.md#addemployment) - Create a Employment
* [getEmployment](docs/sdks/hrisemployment/README.md#getemployment) - Retrieve a Employment
* [addEmployments](docs/sdks/hrisemployment/README.md#addemployments) - Add a batch of Employments

### [hrisGroup](docs/sdks/hrisgroup/README.md)

* [getGroups](docs/sdks/hrisgroup/README.md#getgroups) - List a batch of Groups
* [addGroup](docs/sdks/hrisgroup/README.md#addgroup) - Create a Group
* [getGroup](docs/sdks/hrisgroup/README.md#getgroup) - Retrieve a Group
* [addGroups](docs/sdks/hrisgroup/README.md#addgroups) - Add a batch of Groups

### [hrisLocation](docs/sdks/hrislocation/README.md)

* [getLocations](docs/sdks/hrislocation/README.md#getlocations) - List a batch of Locations
* [addLocation](docs/sdks/hrislocation/README.md#addlocation) - Create a Location
* [getLocation](docs/sdks/hrislocation/README.md#getlocation) - Retrieve a Location
* [addLocations](docs/sdks/hrislocation/README.md#addlocations) - Add a batch of Locations

### [hrisPaygroup](docs/sdks/hrispaygroup/README.md)

* [getPayGroups](docs/sdks/hrispaygroup/README.md#getpaygroups) - List a batch of PayGroups
* [addPayGroup](docs/sdks/hrispaygroup/README.md#addpaygroup) - Create a PayGroup
* [getPayGroup](docs/sdks/hrispaygroup/README.md#getpaygroup) - Retrieve a PayGroup
* [addPayGroups](docs/sdks/hrispaygroup/README.md#addpaygroups) - Add a batch of PayGroups

### [hrisPayrollrun](docs/sdks/hrispayrollrun/README.md)

* [getPayrollRuns](docs/sdks/hrispayrollrun/README.md#getpayrollruns) - List a batch of PayrollRuns
* [addPayrollRun](docs/sdks/hrispayrollrun/README.md#addpayrollrun) - Create a PayrollRun
* [getPayrollRun](docs/sdks/hrispayrollrun/README.md#getpayrollrun) - Retrieve a PayrollRun
* [addPayrollRuns](docs/sdks/hrispayrollrun/README.md#addpayrollruns) - Add a batch of PayrollRuns

### [hrisTimeoff](docs/sdks/hristimeoff/README.md)

* [getTimeoffs](docs/sdks/hristimeoff/README.md#gettimeoffs) - List a batch of Timeoffs
* [addTimeoff](docs/sdks/hristimeoff/README.md#addtimeoff) - Create a Timeoff
* [getTimeoff](docs/sdks/hristimeoff/README.md#gettimeoff) - Retrieve a Timeoff
* [addTimeoffs](docs/sdks/hristimeoff/README.md#addtimeoffs) - Add a batch of Timeoffs

### [hrisTimeoffbalance](docs/sdks/hristimeoffbalance/README.md)

* [getTimeoffBalances](docs/sdks/hristimeoffbalance/README.md#gettimeoffbalances) - List a batch of TimeoffBalances
* [addTimeoffBalance](docs/sdks/hristimeoffbalance/README.md#addtimeoffbalance) - Create a TimeoffBalance
* [getTimeoffBalance](docs/sdks/hristimeoffbalance/README.md#gettimeoffbalance) - Retrieve a TimeoffBalance
* [addTimeoffBalances](docs/sdks/hristimeoffbalance/README.md#addtimeoffbalances) - Add a batch of TimeoffBalances

### [marketingautomationAction](docs/sdks/marketingautomationaction/README.md)

* [getActions](docs/sdks/marketingautomationaction/README.md#getactions) - List a batch of Actions
* [addAction](docs/sdks/marketingautomationaction/README.md#addaction) - Create a Action
* [getAction](docs/sdks/marketingautomationaction/README.md#getaction) - Retrieve a Action
* [addActions](docs/sdks/marketingautomationaction/README.md#addactions) - Add a batch of Actions

### [marketingautomationAutomation](docs/sdks/marketingautomationautomation/README.md)

* [getAutomations](docs/sdks/marketingautomationautomation/README.md#getautomations) - List a batch of Automations
* [addAutomation](docs/sdks/marketingautomationautomation/README.md#addautomation) - Create a Automation
* [getAutomation](docs/sdks/marketingautomationautomation/README.md#getautomation) - Retrieve a Automation
* [addAutomations](docs/sdks/marketingautomationautomation/README.md#addautomations) - Add a batch of Automations

### [marketingautomationCampaign](docs/sdks/marketingautomationcampaign/README.md)

* [getCampaigns](docs/sdks/marketingautomationcampaign/README.md#getcampaigns) - List a batch of Campaigns
* [addCampaign](docs/sdks/marketingautomationcampaign/README.md#addcampaign) - Create a Campaign
* [getCampaign](docs/sdks/marketingautomationcampaign/README.md#getcampaign) - Retrieve a Campaign
* [addCampaigns](docs/sdks/marketingautomationcampaign/README.md#addcampaigns) - Add a batch of Campaigns

### [marketingautomationContact](docs/sdks/marketingautomationcontact/README.md)

* [getMarketingAutomationContacts](docs/sdks/marketingautomationcontact/README.md#getmarketingautomationcontacts) - List a batch of Contacts
* [addMarketingAutomationContact](docs/sdks/marketingautomationcontact/README.md#addmarketingautomationcontact) - Create a Contact
* [getMarketingAutomationContact](docs/sdks/marketingautomationcontact/README.md#getmarketingautomationcontact) - Retrieve a Contact
* [addMarketingAutomationContacts](docs/sdks/marketingautomationcontact/README.md#addmarketingautomationcontacts) - Add a batch of Contacts

### [marketingautomationEmail](docs/sdks/marketingautomationemail/README.md)

* [getEmails](docs/sdks/marketingautomationemail/README.md#getemails) - List a batch of Emails
* [addEmail](docs/sdks/marketingautomationemail/README.md#addemail) - Create a Email
* [getEmail](docs/sdks/marketingautomationemail/README.md#getemail) - Retrieve a Email
* [addEmails](docs/sdks/marketingautomationemail/README.md#addemails) - Add a batch of Emails

### [marketingautomationEvent](docs/sdks/marketingautomationevent/README.md)

* [getMarketingAutomationEvents](docs/sdks/marketingautomationevent/README.md#getmarketingautomationevents) - List a batch of Events
* [addEvent](docs/sdks/marketingautomationevent/README.md#addevent) - Create a Event
* [getEvent](docs/sdks/marketingautomationevent/README.md#getevent) - Retrieve a Event
* [addEvents](docs/sdks/marketingautomationevent/README.md#addevents) - Add a batch of Events

### [marketingautomationList](docs/sdks/marketingautomationlist/README.md)

* [getLists](docs/sdks/marketingautomationlist/README.md#getlists) - List a batch of Lists
* [addList](docs/sdks/marketingautomationlist/README.md#addlist) - Create a List
* [getList](docs/sdks/marketingautomationlist/README.md#getlist) - Retrieve a List
* [addLists](docs/sdks/marketingautomationlist/README.md#addlists) - Add a batch of Lists

### [marketingautomationMessage](docs/sdks/marketingautomationmessage/README.md)

* [getMessages](docs/sdks/marketingautomationmessage/README.md#getmessages) - List a batch of Messages
* [addMessage](docs/sdks/marketingautomationmessage/README.md#addmessage) - Create a Message
* [getMessage](docs/sdks/marketingautomationmessage/README.md#getmessage) - Retrieve a Message
* [addMessages](docs/sdks/marketingautomationmessage/README.md#addmessages) - Add a batch of Messages

### [marketingautomationTemplate](docs/sdks/marketingautomationtemplate/README.md)

* [getTemplates](docs/sdks/marketingautomationtemplate/README.md#gettemplates) - List a batch of Templates
* [addTemplate](docs/sdks/marketingautomationtemplate/README.md#addtemplate) - Create a Template
* [getTemplate](docs/sdks/marketingautomationtemplate/README.md#gettemplate) - Retrieve a Template
* [addTemplates](docs/sdks/marketingautomationtemplate/README.md#addtemplates) - Add a batch of Templates

### [marketingautomationUser](docs/sdks/marketingautomationuser/README.md)

* [getMarketingAutomationUsers](docs/sdks/marketingautomationuser/README.md#getmarketingautomationusers) - List a batch of Users
* [addMarketingAutomationUser](docs/sdks/marketingautomationuser/README.md#addmarketingautomationuser) - Create a User
* [getMarketingAutomationUser](docs/sdks/marketingautomationuser/README.md#getmarketingautomationuser) - Retrieve a User
* [addMarketingAutomationUsers](docs/sdks/marketingautomationuser/README.md#addmarketingautomationusers) - Add a batch of Users

### [atsActivity](docs/sdks/atsactivity/README.md)

* [getActivitys](docs/sdks/atsactivity/README.md#getactivitys) - List a batch of Activitys
* [addActivity](docs/sdks/atsactivity/README.md#addactivity) - Create a Activity
* [getActivity](docs/sdks/atsactivity/README.md#getactivity) - Retrieve a Activity
* [addActivitys](docs/sdks/atsactivity/README.md#addactivitys) - Add a batch of Activitys

### [atsApplication](docs/sdks/atsapplication/README.md)

* [getApplications](docs/sdks/atsapplication/README.md#getapplications) - List a batch of Applications
* [addApplication](docs/sdks/atsapplication/README.md#addapplication) - Create a Application
* [getApplication](docs/sdks/atsapplication/README.md#getapplication) - Retrieve a Application
* [addApplications](docs/sdks/atsapplication/README.md#addapplications) - Add a batch of Applications

### [atsAttachment](docs/sdks/atsattachment/README.md)

* [getAtsAttachments](docs/sdks/atsattachment/README.md#getatsattachments) - List a batch of Attachments
* [addAtsAttachment](docs/sdks/atsattachment/README.md#addatsattachment) - Create a Attachment
* [getAtsAttachment](docs/sdks/atsattachment/README.md#getatsattachment) - Retrieve a Attachment
* [addAtsAttachments](docs/sdks/atsattachment/README.md#addatsattachments) - Add a batch of Attachments

### [atsCandidate](docs/sdks/atscandidate/README.md)

* [getCandidates](docs/sdks/atscandidate/README.md#getcandidates) - List a batch of Candidates
* [addCandidate](docs/sdks/atscandidate/README.md#addcandidate) - Create a Candidate
* [getCandidate](docs/sdks/atscandidate/README.md#getcandidate) - Retrieve a Candidate
* [addCandidates](docs/sdks/atscandidate/README.md#addcandidates) - Add a batch of Candidates

### [atsDepartment](docs/sdks/atsdepartment/README.md)

* [getDepartments](docs/sdks/atsdepartment/README.md#getdepartments) - List a batch of Departments
* [addDepartment](docs/sdks/atsdepartment/README.md#adddepartment) - Create a Department
* [getDepartment](docs/sdks/atsdepartment/README.md#getdepartment) - Retrieve a Department
* [addDepartments](docs/sdks/atsdepartment/README.md#adddepartments) - Add a batch of Departments

### [atsInterview](docs/sdks/atsinterview/README.md)

* [getInterviews](docs/sdks/atsinterview/README.md#getinterviews) - List a batch of Interviews
* [addInterview](docs/sdks/atsinterview/README.md#addinterview) - Create a Interview
* [getInterview](docs/sdks/atsinterview/README.md#getinterview) - Retrieve a Interview
* [addInterviews](docs/sdks/atsinterview/README.md#addinterviews) - Add a batch of Interviews

### [atsJobinterviewstage](docs/sdks/atsjobinterviewstage/README.md)

* [getJobInterviewStages](docs/sdks/atsjobinterviewstage/README.md#getjobinterviewstages) - List a batch of JobInterviewStages
* [addJobInterviewStage](docs/sdks/atsjobinterviewstage/README.md#addjobinterviewstage) - Create a JobInterviewStage
* [getJobInterviewStage](docs/sdks/atsjobinterviewstage/README.md#getjobinterviewstage) - Retrieve a JobInterviewStage
* [addJobInterviewStages](docs/sdks/atsjobinterviewstage/README.md#addjobinterviewstages) - Add a batch of JobInterviewStages

### [atsJob](docs/sdks/atsjob/README.md)

* [getJobs](docs/sdks/atsjob/README.md#getjobs) - List a batch of Jobs
* [addJob](docs/sdks/atsjob/README.md#addjob) - Create a Job
* [getJob](docs/sdks/atsjob/README.md#getjob) - Retrieve a Job
* [addJobs](docs/sdks/atsjob/README.md#addjobs) - Add a batch of Jobs

### [atsOffer](docs/sdks/atsoffer/README.md)

* [getOffers](docs/sdks/atsoffer/README.md#getoffers) - List a batch of Offers
* [addOffer](docs/sdks/atsoffer/README.md#addoffer) - Create a Offer
* [getOffer](docs/sdks/atsoffer/README.md#getoffer) - Retrieve a Offer
* [addOffers](docs/sdks/atsoffer/README.md#addoffers) - Add a batch of Offers

### [atsOffice](docs/sdks/atsoffice/README.md)

* [getOffices](docs/sdks/atsoffice/README.md#getoffices) - List a batch of Offices
* [addOffice](docs/sdks/atsoffice/README.md#addoffice) - Create a Office
* [getOffice](docs/sdks/atsoffice/README.md#getoffice) - Retrieve a Office
* [addOffices](docs/sdks/atsoffice/README.md#addoffices) - Add a batch of Offices

### [atsRejectreason](docs/sdks/atsrejectreason/README.md)

* [getRejectReasons](docs/sdks/atsrejectreason/README.md#getrejectreasons) - List a batch of RejectReasons
* [addRejectReason](docs/sdks/atsrejectreason/README.md#addrejectreason) - Create a RejectReason
* [getRejectReason](docs/sdks/atsrejectreason/README.md#getrejectreason) - Retrieve a RejectReason
* [addRejectReasons](docs/sdks/atsrejectreason/README.md#addrejectreasons) - Add a batch of RejectReasons

### [atsScorecard](docs/sdks/atsscorecard/README.md)

* [getScoreCards](docs/sdks/atsscorecard/README.md#getscorecards) - List a batch of ScoreCards
* [addScoreCard](docs/sdks/atsscorecard/README.md#addscorecard) - Create a ScoreCard
* [getScoreCard](docs/sdks/atsscorecard/README.md#getscorecard) - Retrieve a ScoreCard
* [addScoreCards](docs/sdks/atsscorecard/README.md#addscorecards) - Add a batch of ScoreCards

### [atsScreeningquestion](docs/sdks/atsscreeningquestion/README.md)

* [getScreeningQuestions](docs/sdks/atsscreeningquestion/README.md#getscreeningquestions) - List a batch of ScreeningQuestions
* [addScreeningQuestion](docs/sdks/atsscreeningquestion/README.md#addscreeningquestion) - Create a ScreeningQuestion
* [getScreeningQuestion](docs/sdks/atsscreeningquestion/README.md#getscreeningquestion) - Retrieve a ScreeningQuestion
* [addScreeningQuestions](docs/sdks/atsscreeningquestion/README.md#addscreeningquestions) - Add a batch of ScreeningQuestions

### [atsTag](docs/sdks/atstag/README.md)

* [getAtsTags](docs/sdks/atstag/README.md#getatstags) - List a batch of Tags
* [addTag](docs/sdks/atstag/README.md#addtag) - Create a Tag
* [getAtsTag](docs/sdks/atstag/README.md#getatstag) - Retrieve a Tag
* [addTags](docs/sdks/atstag/README.md#addtags) - Add a batch of Tags

### [atsUser](docs/sdks/atsuser/README.md)

* [getAtsUsers](docs/sdks/atsuser/README.md#getatsusers) - List a batch of Users
* [addAtsUser](docs/sdks/atsuser/README.md#addatsuser) - Create a User
* [getAtsUser](docs/sdks/atsuser/README.md#getatsuser) - Retrieve a User
* [addAtsUsers](docs/sdks/atsuser/README.md#addatsusers) - Add a batch of Users

### [atsEeocs](docs/sdks/atseeocs/README.md)

* [getEeocss](docs/sdks/atseeocs/README.md#geteeocss) - List a batch of Eeocss
* [addEeocs](docs/sdks/atseeocs/README.md#addeeocs) - Create a Eeocs
* [getEeocs](docs/sdks/atseeocs/README.md#geteeocs) - Retrieve a Eeocs
* [addEeocss](docs/sdks/atseeocs/README.md#addeeocss) - Add a batch of Eeocss

### [accountingAccount](docs/sdks/accountingaccount/README.md)

* [getAccountingAccounts](docs/sdks/accountingaccount/README.md#getaccountingaccounts) - List a batch of Accounts
* [addAccount](docs/sdks/accountingaccount/README.md#addaccount) - Create a Account
* [getAccountingAccount](docs/sdks/accountingaccount/README.md#getaccountingaccount) - Retrieve a Account
* [addAccounts](docs/sdks/accountingaccount/README.md#addaccounts) - Add a batch of Accounts

### [accountingAddress](docs/sdks/accountingaddress/README.md)

* [getAddresss](docs/sdks/accountingaddress/README.md#getaddresss) - List a batch of Addresss
* [addAddress](docs/sdks/accountingaddress/README.md#addaddress) - Create a Address
* [getAddress](docs/sdks/accountingaddress/README.md#getaddress) - Retrieve a Address
* [addAddresss](docs/sdks/accountingaddress/README.md#addaddresss) - Add a batch of Addresss

### [accountingAttachment](docs/sdks/accountingattachment/README.md)

* [getAccountingAttachments](docs/sdks/accountingattachment/README.md#getaccountingattachments) - List a batch of Attachments
* [addAccountingAttachment](docs/sdks/accountingattachment/README.md#addaccountingattachment) - Create a Attachment
* [getAccountingAttachment](docs/sdks/accountingattachment/README.md#getaccountingattachment) - Retrieve a Attachment
* [addAccountingAttachments](docs/sdks/accountingattachment/README.md#addaccountingattachments) - Add a batch of Attachments

### [accountingBalancesheet](docs/sdks/accountingbalancesheet/README.md)

* [getBalanceSheets](docs/sdks/accountingbalancesheet/README.md#getbalancesheets) - List a batch of BalanceSheets
* [addBalanceSheet](docs/sdks/accountingbalancesheet/README.md#addbalancesheet) - Create a BalanceSheet
* [getBalanceSheet](docs/sdks/accountingbalancesheet/README.md#getbalancesheet) - Retrieve a BalanceSheet
* [addBalanceSheets](docs/sdks/accountingbalancesheet/README.md#addbalancesheets) - Add a batch of BalanceSheets

### [accountingCashflowstatement](docs/sdks/accountingcashflowstatement/README.md)

* [getCashflowStatements](docs/sdks/accountingcashflowstatement/README.md#getcashflowstatements) - List a batch of CashflowStatements
* [addCashflowStatement](docs/sdks/accountingcashflowstatement/README.md#addcashflowstatement) - Create a CashflowStatement
* [getCashflowStatement](docs/sdks/accountingcashflowstatement/README.md#getcashflowstatement) - Retrieve a CashflowStatement
* [addCashflowStatements](docs/sdks/accountingcashflowstatement/README.md#addcashflowstatements) - Add a batch of CashflowStatements

### [accountingCompanyinfo](docs/sdks/accountingcompanyinfo/README.md)

* [getCompanyInfos](docs/sdks/accountingcompanyinfo/README.md#getcompanyinfos) - List a batch of CompanyInfos
* [addCompanyInfo](docs/sdks/accountingcompanyinfo/README.md#addcompanyinfo) - Create a CompanyInfo
* [getCompanyInfo](docs/sdks/accountingcompanyinfo/README.md#getcompanyinfo) - Retrieve a CompanyInfo
* [addCompanyInfos](docs/sdks/accountingcompanyinfo/README.md#addcompanyinfos) - Add a batch of CompanyInfos

### [accountingContact](docs/sdks/accountingcontact/README.md)

* [getAccountingContacts](docs/sdks/accountingcontact/README.md#getaccountingcontacts) - List a batch of Contacts
* [addAccountingContact](docs/sdks/accountingcontact/README.md#addaccountingcontact) - Create a Contact
* [getAccountingContact](docs/sdks/accountingcontact/README.md#getaccountingcontact) - Retrieve a Contact
* [addAccountingContacts](docs/sdks/accountingcontact/README.md#addaccountingcontacts) - Add a batch of Contacts

### [accountingCreditnote](docs/sdks/accountingcreditnote/README.md)

* [getCreditNotes](docs/sdks/accountingcreditnote/README.md#getcreditnotes) - List a batch of CreditNotes
* [addCreditNote](docs/sdks/accountingcreditnote/README.md#addcreditnote) - Create a CreditNote
* [getCreditNote](docs/sdks/accountingcreditnote/README.md#getcreditnote) - Retrieve a CreditNote
* [addCreditNotes](docs/sdks/accountingcreditnote/README.md#addcreditnotes) - Add a batch of CreditNotes

### [accountingExpense](docs/sdks/accountingexpense/README.md)

* [getExpenses](docs/sdks/accountingexpense/README.md#getexpenses) - List a batch of Expenses
* [addExpense](docs/sdks/accountingexpense/README.md#addexpense) - Create a Expense
* [getExpense](docs/sdks/accountingexpense/README.md#getexpense) - Retrieve a Expense
* [addExpenses](docs/sdks/accountingexpense/README.md#addexpenses) - Add a batch of Expenses

### [accountingIncomestatement](docs/sdks/accountingincomestatement/README.md)

* [getIncomeStatements](docs/sdks/accountingincomestatement/README.md#getincomestatements) - List a batch of IncomeStatements
* [addIncomeStatement](docs/sdks/accountingincomestatement/README.md#addincomestatement) - Create a IncomeStatement
* [getIncomeStatement](docs/sdks/accountingincomestatement/README.md#getincomestatement) - Retrieve a IncomeStatement
* [addIncomeStatements](docs/sdks/accountingincomestatement/README.md#addincomestatements) - Add a batch of IncomeStatements

### [accountingInvoice](docs/sdks/accountinginvoice/README.md)

* [getInvoices](docs/sdks/accountinginvoice/README.md#getinvoices) - List a batch of Invoices
* [addInvoice](docs/sdks/accountinginvoice/README.md#addinvoice) - Create a Invoice
* [getInvoice](docs/sdks/accountinginvoice/README.md#getinvoice) - Retrieve a Invoice
* [addInvoices](docs/sdks/accountinginvoice/README.md#addinvoices) - Add a batch of Invoices

### [accountingItem](docs/sdks/accountingitem/README.md)

* [getItems](docs/sdks/accountingitem/README.md#getitems) - List a batch of Items
* [addItem](docs/sdks/accountingitem/README.md#additem) - Create a Item
* [getItem](docs/sdks/accountingitem/README.md#getitem) - Retrieve a Item
* [addItems](docs/sdks/accountingitem/README.md#additems) - Add a batch of Items

### [accountingJournalentry](docs/sdks/accountingjournalentry/README.md)

* [getJournalEntrys](docs/sdks/accountingjournalentry/README.md#getjournalentrys) - List a batch of JournalEntrys
* [addJournalEntry](docs/sdks/accountingjournalentry/README.md#addjournalentry) - Create a JournalEntry
* [getJournalEntry](docs/sdks/accountingjournalentry/README.md#getjournalentry) - Retrieve a JournalEntry
* [addJournalEntrys](docs/sdks/accountingjournalentry/README.md#addjournalentrys) - Add a batch of JournalEntrys

### [accountingPayment](docs/sdks/accountingpayment/README.md)

* [getPayments](docs/sdks/accountingpayment/README.md#getpayments) - List a batch of Payments
* [addPayment](docs/sdks/accountingpayment/README.md#addpayment) - Create a Payment
* [getPayment](docs/sdks/accountingpayment/README.md#getpayment) - Retrieve a Payment
* [addPayments](docs/sdks/accountingpayment/README.md#addpayments) - Add a batch of Payments

### [accountingPhonenumber](docs/sdks/accountingphonenumber/README.md)

* [getPhoneNumbers](docs/sdks/accountingphonenumber/README.md#getphonenumbers) - List a batch of PhoneNumbers
* [addPhoneNumber](docs/sdks/accountingphonenumber/README.md#addphonenumber) - Create a PhoneNumber
* [getPhoneNumber](docs/sdks/accountingphonenumber/README.md#getphonenumber) - Retrieve a PhoneNumber
* [addPhoneNumbers](docs/sdks/accountingphonenumber/README.md#addphonenumbers) - Add a batch of PhoneNumbers

### [accountingPurchaseorder](docs/sdks/accountingpurchaseorder/README.md)

* [getPurchaseOrders](docs/sdks/accountingpurchaseorder/README.md#getpurchaseorders) - List a batch of PurchaseOrders
* [addPurchaseOrder](docs/sdks/accountingpurchaseorder/README.md#addpurchaseorder) - Create a PurchaseOrder
* [getPurchaseOrder](docs/sdks/accountingpurchaseorder/README.md#getpurchaseorder) - Retrieve a PurchaseOrder
* [addPurchaseOrders](docs/sdks/accountingpurchaseorder/README.md#addpurchaseorders) - Add a batch of PurchaseOrders

### [accountingTaxrate](docs/sdks/accountingtaxrate/README.md)

* [getTaxRates](docs/sdks/accountingtaxrate/README.md#gettaxrates) - List a batch of TaxRates
* [addTaxRate](docs/sdks/accountingtaxrate/README.md#addtaxrate) - Create a TaxRate
* [getTaxRate](docs/sdks/accountingtaxrate/README.md#gettaxrate) - Retrieve a TaxRate
* [addTaxRates](docs/sdks/accountingtaxrate/README.md#addtaxrates) - Add a batch of TaxRates

### [accountingTrackingcategory](docs/sdks/accountingtrackingcategory/README.md)

* [getTrackingCategorys](docs/sdks/accountingtrackingcategory/README.md#gettrackingcategorys) - List a batch of TrackingCategorys
* [addTrackingCategory](docs/sdks/accountingtrackingcategory/README.md#addtrackingcategory) - Create a TrackingCategory
* [getTrackingCategory](docs/sdks/accountingtrackingcategory/README.md#gettrackingcategory) - Retrieve a TrackingCategory
* [addTrackingCategorys](docs/sdks/accountingtrackingcategory/README.md#addtrackingcategorys) - Add a batch of TrackingCategorys

### [accountingTransaction](docs/sdks/accountingtransaction/README.md)

* [getTransactions](docs/sdks/accountingtransaction/README.md#gettransactions) - List a batch of Transactions
* [addTransaction](docs/sdks/accountingtransaction/README.md#addtransaction) - Create a Transaction
* [getTransaction](docs/sdks/accountingtransaction/README.md#gettransaction) - Retrieve a Transaction
* [addTransactions](docs/sdks/accountingtransaction/README.md#addtransactions) - Add a batch of Transactions

### [accountingVendorcredit](docs/sdks/accountingvendorcredit/README.md)

* [getVendorCredits](docs/sdks/accountingvendorcredit/README.md#getvendorcredits) - List a batch of VendorCredits
* [addVendorCredit](docs/sdks/accountingvendorcredit/README.md#addvendorcredit) - Create a VendorCredit
* [getVendorCredit](docs/sdks/accountingvendorcredit/README.md#getvendorcredit) - Retrieve a VendorCredit
* [addVendorCredits](docs/sdks/accountingvendorcredit/README.md#addvendorcredits) - Add a batch of VendorCredits

### [filestorageDrive](docs/sdks/filestoragedrive/README.md)

* [getDrives](docs/sdks/filestoragedrive/README.md#getdrives) - List a batch of Drives
* [addDrive](docs/sdks/filestoragedrive/README.md#adddrive) - Create a Drive
* [getDrive](docs/sdks/filestoragedrive/README.md#getdrive) - Retrieve a Drive
* [addDrives](docs/sdks/filestoragedrive/README.md#adddrives) - Add a batch of Drives

### [filestorageFile](docs/sdks/filestoragefile/README.md)

* [getFiles](docs/sdks/filestoragefile/README.md#getfiles) - List a batch of Files
* [addFile](docs/sdks/filestoragefile/README.md#addfile) - Create a File
* [getFile](docs/sdks/filestoragefile/README.md#getfile) - Retrieve a File
* [addFiles](docs/sdks/filestoragefile/README.md#addfiles) - Add a batch of Files

### [filestorageFolder](docs/sdks/filestoragefolder/README.md)

* [getFolders](docs/sdks/filestoragefolder/README.md#getfolders) - List a batch of Folders
* [addFolder](docs/sdks/filestoragefolder/README.md#addfolder) - Create a Folder
* [getFolder](docs/sdks/filestoragefolder/README.md#getfolder) - Retrieve a Folder
* [addFolders](docs/sdks/filestoragefolder/README.md#addfolders) - Add a batch of Folders

### [filestorageSharedlink](docs/sdks/filestoragesharedlink/README.md)

* [getSharedlinks](docs/sdks/filestoragesharedlink/README.md#getsharedlinks) - List a batch of Sharedlinks
* [addSharedlink](docs/sdks/filestoragesharedlink/README.md#addsharedlink) - Create a Sharedlink
* [getSharedlink](docs/sdks/filestoragesharedlink/README.md#getsharedlink) - Retrieve a Sharedlink
* [addSharedlinks](docs/sdks/filestoragesharedlink/README.md#addsharedlinks) - Add a batch of Sharedlinks

### [filestoragePermission](docs/sdks/filestoragepermission/README.md)

* [getPermissions](docs/sdks/filestoragepermission/README.md#getpermissions) - List a batch of Permissions
* [addPermission](docs/sdks/filestoragepermission/README.md#addpermission) - Create a Permission
* [updatePermission](docs/sdks/filestoragepermission/README.md#updatepermission) - Update a Permission
* [getPermission](docs/sdks/filestoragepermission/README.md#getpermission) - Retrieve a Permission
* [addPermissions](docs/sdks/filestoragepermission/README.md#addpermissions) - Add a batch of Permissions

### [ticketingAttachments](docs/sdks/ticketingattachments/README.md)

* [getTicketingAttachments](docs/sdks/ticketingattachments/README.md#getticketingattachments) - List a batch of Attachments
* [addTicketingAttachment](docs/sdks/ticketingattachments/README.md#addticketingattachment) - Create a Attachment
* [getTicketingAttachment](docs/sdks/ticketingattachments/README.md#getticketingattachment) - Retrieve a Attachment
* [downloadAttachment](docs/sdks/ticketingattachments/README.md#downloadattachment) - Download a Attachment
* [addTicketingAttachments](docs/sdks/ticketingattachments/README.md#addticketingattachments) - Add a batch of Attachments
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Panora } from "panora-ts";
import { SDKValidationError } from "panora-ts/models/errors";

const panora = new Panora({
    jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    let result;
    try {
        result = await panora.getHello();
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.panora.dev` | None |
| 1 | `https://api-sandbox.panora.dev` | None |

```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
    serverIdx: 1,
    jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await panora.getHello();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
    serverURL: "https://api.panora.dev",
    jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await panora.getHello();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Panora } from "panora-ts";
import { HTTPClient } from "panora-ts/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Panora({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name        | Type        | Scheme      |
| ----------- | ----------- | ----------- |
| `jwt`       | http        | HTTP Bearer |

To authenticate with the API the `jwt` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
    jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await panora.getHello();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
