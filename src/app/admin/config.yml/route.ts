import * as cms from '@/lib/cmsUtil'
import { NextResponse } from 'next/server'

export function GET() {
  const config = {
    locale: 'pt',
    backend: {
      name: 'git-gateway',
      branch: 'main',
    },
    media_folder: '/public/uploads',
    public_folder: '/uploads',
    local_backend: process.env.NODE_ENV === 'development',
    collections: [
      cms.fileCollection('Conteúdo', { name: 'conteudo' }, [
        cms.fileCollectionEntry('SEO', null, [
          cms.string('URL', {
            name: 'url',
            hint: 'URL final do site, sem a última barra. Ex: https://exemplo.com.br',
          }),
          cms.string('Título', { name: 'titulo' }),
          cms.string('H1', { name: 'h1' }),
          cms.text('Descrição', { name: 'descricao' }),
          cms.image('Imagem de compartilhamento', {
            name: 'imagem_de_compartilhamento',
          }),
          cms.string('Palavras-chave', { name: 'palavras_chave' }),
        ]),
      ]),
    ],
  }

  return NextResponse.json(config, {
    headers: {
      'Content-Type': 'text/yaml',
    },
  })
}
