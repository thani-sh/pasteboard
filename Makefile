
all:

	# [*] empty and prepare the build directory
	-@touch build/temp && rm -r build/*

	# [*] create application directory and copy static source files
	-@mkdir build/application
	-@cp ./sources/index.html ./sources/package.json ./build/application/
	-@cp -r ./sources/views ./build/application/views
	-@cp -r ./sources/vendor ./build/application/vendor

	# [*] compile less files into a single css file
	-@lessc ./sources/styles/styles.less ./build/application/styles.css

	# [*] combine all javascript files into a single js file
	-@cat ./sources/scripts/ScriptHeader.js > ./build/application/scripts.js
	-@cat ./sources/scripts/*Scripts.js > ./build/application/scripts.js
	-@cat ./sources/scripts/*Module.js     >> ./build/application/scripts.js
	-@cat ./sources/scripts/*Controller.js >> ./build/application/scripts.js

	# [*] build node-webkit package
	-@(cd build/application && zip ../pasteboard.nw -r * > /dev/null)

	# [*] build node-webkit executable
	-@cat tools/node-webkit-v0.8.0-linux-ia32/nw build/pasteboard.nw > build/pasteboard
	-@chmod +x build/pasteboard

	# [*] clean the build directory
	-@rm -r build/application

	# [*] debug: copy node-webkit debugger files
	-@cp tools/node-webkit-v0.8.0-linux-ia32/nw.pak build/

	# [*] debug: run the executable
	-@./build/pasteboard
