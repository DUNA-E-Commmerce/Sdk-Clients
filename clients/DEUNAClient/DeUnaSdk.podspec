Pod::Spec.new do |s|
  s.name = 'DeUnaSdk'
  s.ios.deployment_target = '11.0'
  s.osx.deployment_target = '10.13'
  s.tvos.deployment_target = '11.0'
  s.watchos.deployment_target = '4.0'
  s.version = '1.0.0'
  s.source = { :git => 'git@github.com:OpenAPITools/openapi-generator.git', :tag => 'v1.0' }
  s.authors = 'Developers DEUNA'
  s.license = 'Proprietary'
  s.homepage = 'https://github.com/OpenAPITools/openapi-generator'
  s.summary = 'DeUnaSdk Swift SDK'
  s.description = 'DeUnaSdk for Merchants'
  s.source_files = 'src/**/*.swift'
  s.dependency 'AnyCodable-FlightSchool', '~> 0.6'
end
