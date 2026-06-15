// Busca os dados já atualizados do projeto original (26worldcup) e os coloca
// em public/data antes do build. Roda no build do Netlify (e pode rodar local
// com `npm run sync-data`), garantindo que cada deploy use dados frescos sem
// depender do agendamento do GitHub Actions.
//
// Se a sincronização falhar (rede, etc.), o build continua com os dados já
// commitados — nunca quebra a publicação.

import { execSync } from 'node:child_process'
import { cpSync, existsSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const UPSTREAM = 'https://github.com/26worldcup/26worldcup.github.io.git'
const dest = join(process.cwd(), 'public', 'data')

let tmp
try {
  tmp = mkdtempSync(join(tmpdir(), 'wc-upstream-'))
  console.log('Clonando dados do projeto original…')
  execSync(`git clone --depth 1 ${UPSTREAM} "${tmp}"`, { stdio: 'inherit' })

  const src = join(tmp, 'public', 'data')
  if (existsSync(src)) {
    rmSync(dest, { recursive: true, force: true })
    cpSync(src, dest, { recursive: true })
    console.log('✓ public/data atualizado a partir do projeto original.')
  } else {
    console.warn('public/data não encontrado no upstream — mantendo os dados commitados.')
  }
} catch (err) {
  console.warn('⚠ Falha ao sincronizar dados do upstream — usando os dados commitados.')
  console.warn(err?.message ?? err)
} finally {
  if (tmp) rmSync(tmp, { recursive: true, force: true })
}
