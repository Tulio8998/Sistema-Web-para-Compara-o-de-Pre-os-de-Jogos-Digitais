import styles from '../styles/gameDetail.module.css';
import { FaArrowTrendDown, FaArrowsUpDown } from "react-icons/fa6";
import { PiWaveTriangleBold } from "react-icons/pi";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function PriceHistory({ deal }: { deal: any }) {
    const priceData = [
        { name: 'Jan', price: deal?.regular?.amount || 60 },
        { name: 'Fev', price: deal?.regular?.amount || 60 },
        { name: 'Mar', price: deal?.price?.amount || 48 },
        { name: 'Abr', price: deal?.price?.amount || 60 },
        { name: 'Mai', price: deal?.price?.amount || 60 },
    ];

    const currentPrice = deal?.price?.amount || 0;
    const historyLow = deal?.historyLow?.amount || currentPrice;
    const difference = currentPrice - historyLow;
    const diffPercent = historyLow > 0 ? Math.round((difference / historyLow) * 100) : 0;

    return (
        <div className={`${styles['graphic']}`}>
            <div className={`${styles['data-graphic']}`}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={priceData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#A855F7" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#A855F7" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#252936" vertical={false} />
                        <XAxis dataKey="name" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                        <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `R$${value}`} />
                        <Tooltip contentStyle={{ backgroundColor: '#1A1D27', borderColor: '#2D3243', borderRadius: '8px', color: '#fff' }} itemStyle={{ color: '#A855F7', fontWeight: 'bold' }} formatter={(value) => [`R$ ${value}`, 'Preço']} />
                        <Area type="monotone" dataKey="price" stroke="#A855F7" strokeWidth={3} fillOpacity={1} fill="url(#colorPrice)" activeDot={{ r: 6, fill: "#A855F7", stroke: "#fff", strokeWidth: 2 }} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className={`${styles['status-graphic']}`}>
                <div className={`${styles['status']} ${styles['history']}`}>
                    <p><FaArrowTrendDown className={`${styles['icon']} ${styles['icon-history']}`}/> MÍNIMO HISTÓRICO</p>
                    <p className={`${styles['price']}`}>R${historyLow.toFixed(2).replace('.', ',')}</p>
                    <p>{deal?.historyLow?.shopName || 'Loja Desconhecida'}</p>
                    <p>{deal?.historyLow?.timeStamp || 'Loja Desconhecida'}</p>
                </div>
                <div className={`${styles['status']} ${styles['average']}`}>
                    <p><PiWaveTriangleBold className={`${styles['icon']} ${styles['icon-average']}`}/>PREÇO BASE</p>
                    <p className={`${styles['price']}`}>R${(deal?.regular?.amount || 0).toFixed(2).replace('.', ',')}</p>
                    <p>Preço s/ desconto</p>
                </div>
                <div className={`${styles['status']} ${styles['versus']}`}>
                    <p><FaArrowsUpDown className={`${styles['icon']} ${styles['icon-versus']}`}/>ATUAL vs MÍNIMO</p>
                    <p className={`${styles['discount']}`}>+{diffPercent}%</p>
                    <p>R${currentPrice.toFixed(2).replace('.', ',')} vs histórico</p>
                </div>
            </div>     
        </div>
    );
}