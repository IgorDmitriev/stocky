json.partial! 'api/companies/company', company: @company
json.history @company.get_history
