const fs = require('fs'),
    base = './test',
    path = require('path')

const readDir = (base, level) => {
    const files = fs.readdirSync(base)

    files.forEach(item => {
        let localeBase = path.join(base, item),
            state = fs.statSync(localeBase)

        if (state.isDirectory()) {
            readDir(localeBase, level + 1)
        } else {
            let nameDir = item[0]

            if(!fs.existsSync(nameDir)) {
                fs.mkdirSync(`${nameDir}`, { recursive: true })
            }
            console.log(localeBase, `./${nameDir}/${item}`)
            fs.copyFile(localeBase, `./${nameDir}/${item}`, err => {
                if (err) {
                    console.log(err)

                    return
                }
            })
        }
    })
}

readDir(base, 0)