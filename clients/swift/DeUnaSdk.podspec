Pod::Spec.new do |s|
  s.name = 'DeUnaSdk'
  s.ios.deployment_target = '12.0'
  s.version = '0.1'
  s.source = { :git => 'git@github.com/DUNA-E-Commmerce/Sdk-Clients/tree/develop/clients/swift', :tag => 'v0.0.1-rc9' }
  s.authors = 'OpenAPI Generator'
  s.license = 'Proprietary'
  s.homepage = 'https://github.com/OpenAPITools/openapi-generator'
  s.summary = 'DeUnaSdk Swift SDK'
  s.source_files = '**/*.swift'
  s.dependency 'AnyCodable-FlightSchool', '~> 0.6'
end
