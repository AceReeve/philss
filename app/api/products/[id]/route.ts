import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { CACHE_CONTROL } from '@/lib/http/cache-control'
import { getStoreId } from '@/lib/store'

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  const supabase = await createClient()
  const storeId = await getStoreId(request)

  try {
    const { data, error } = await supabase.from('products').select('*').eq('id', id).eq('store', storeId).maybeSingle()

    if (error) throw error
    if (!data) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    return NextResponse.json(
      { product: data },
      {
        headers: {
          'Cache-Control': CACHE_CONTROL.detail,
        },
      }
    )
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch product' },
      { status: 500 }
    )
  }
}
