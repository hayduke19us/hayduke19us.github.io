require 'colorize'

APP = File.basename(Dir.pwd)

def generate_css
  `sass styles/index.scss public/base.css`
   print_info __method__
end

def open_app_file
  `open index.html`
   print_info __method__
end

def open_in_browser
  `open http://hayduke19us.github.io`
   print_info __method__
end

def push_to_github
  `git add :/`
  `git commit -m 'update for deployment'`
  `git push origin master`
   print_info __method__
end

def print_info action
  puts %[ #{action} for #{APP} ].colorize(:green)
end

namespace :launch do

  task :production do
    generate_css
    push_to_github
    open_in_browser
  end

  task :test do
    generate_css
    open_app_file
  end

end
