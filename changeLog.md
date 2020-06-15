# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). So we are using below tags to explain the types of changes:

- Added
- Fixed
- Changed
- Removed

## [0.4.0] - 2020-06-07

### Added

- add chat page `dialog (content,controller,info)`
- add drawer
- add modal manager
- add state for overlays (overlay, drawer, modal)
- add styles for drawer transition
- use `import router from "@/router";` instead of context.root.$router in useLogin


### Changed

- move component's hook from hooks directory to their SFC files
- re-structure some directories and components

### Removed

- remove GithubUsers

## [0.3.1] - 2020-06-02

### Added

- Add height,width=100% to html,body via \_reset.scss
- add changeLog
