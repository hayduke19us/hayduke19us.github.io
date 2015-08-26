require 'colorize'

APP = File.basename(Dir.pwd)

def generate_css
  `sass styles/index.scss public/base.css`
   print_info __method__
end

def launch_app
  `open index.html`
   print_info __method__
end

def print_info action
  puts %[ #{action} for #{APP} ].colorize(:green)
end

task default: 'launch'

task :launch do
  generate_css
  launch_app
end
