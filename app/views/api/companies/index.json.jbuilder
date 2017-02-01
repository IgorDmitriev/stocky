@companies.each do |company|
  json.set! company.id do
    json.partial! 'api/companies/company', company: company
  end
end
